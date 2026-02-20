/**
 * Sets up the IntersectionObserver for the Table of Contents.
 * Highlights the active section in the TOC as the user scrolls.
 */
export function initTOC() {
  const observerOptions = {
    rootMargin: "-10% 0px -70% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  let currentActiveId: string | null = null;
  const visibleSections = new Set<Element>();
  let isUserClicking = false;
  let clickTimeout: number | null = null;

  // Map each heading ID to an array of TOC list items
  // This allows us to sync both the Desktop and Mobile TOCs simultaneously
  const tocLinks = new Map<string, Element[]>();

  document.querySelectorAll("nav.article-toc a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const id = href.substring(1);
      const li = link.closest("li.toc-li");
      if (li) {
        if (!tocLinks.has(id)) tocLinks.set(id, []);
        tocLinks.get(id)!.push(li);
      }
    }
  });

  const updateActiveLink = (id: string | null) => {
    if (!id || currentActiveId === id) return;

    // Remove active class from all TOC items
    document.querySelectorAll("nav.article-toc li.toc-li").forEach((li) => {
      li.classList.remove("active");
    });

    // Add active class to ALL matching items (mobile + desktop)
    const activeLis = tocLinks.get(id);
    if (activeLis) {
      activeLis.forEach((li) => li.classList.add("active"));
      currentActiveId = id;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    if (isUserClicking) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSections.add(entry.target);
      } else {
        visibleSections.delete(entry.target);
      }
    });

    if (visibleSections.size > 0) {
      // Sort visible sections by their position on screen
      const sortedSections = Array.from(visibleSections).sort((a, b) => {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
      });

      // Logic to pick the most relevant section deeply nested near the top
      let sectionToActivate = sortedSections[0];
      for (const section of sortedSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.2) {
          if (sectionToActivate.contains(section)) {
            sectionToActivate = section;
          }
        } else {
          break;
        }
      }

      const heading = sectionToActivate.querySelector(
        ":scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6",
      );
      if (heading) {
        updateActiveLink(heading.getAttribute("id"));
      }
    }
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("article section").forEach((section) => {
    observer.observe(section);
  });

  // Handle user clicks to temporarily disable scroll observer jumping
  document.querySelectorAll("nav.article-toc a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.substring(1);
      updateActiveLink(targetId);

      isUserClicking = true;
      if (clickTimeout) clearTimeout(clickTimeout);
      clickTimeout = window.setTimeout(() => {
        isUserClicking = false;
      }, 1000);
    });
  });

  // Initial check on page load to activate the topmost section
  const firstSection = document.querySelector("article section");
  if (firstSection) {
    const heading = firstSection.querySelector(":scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6");
    if (heading) updateActiveLink(heading.getAttribute("id"));
  }
}
