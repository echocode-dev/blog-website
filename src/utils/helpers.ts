import type { CollectionEntry } from "astro:content";

/**
 * Calculates related posts based on shared tags.
 */
export function getRelatedPosts(
  allPosts: CollectionEntry<"blog">[],
  currentSlug: string,
  currentTags: string[],
  limit = 5,
) {
  return allPosts
    .filter((post) => post.id !== currentSlug)
    .map((post) => {
      const commonTags = post.data.tags.filter((tag) => currentTags.includes(tag)).length;
      return { ...post, commonTags };
    })
    .filter((post) => post.commonTags > 0)
    .sort((a, b) => b.commonTags - a.commonTags)
    .slice(0, limit);
}

export function getBlogJsonLd(frontmatter: CollectionEntry<"blog">["data"], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: frontmatter.title,
    description: frontmatter.summary,
    image: new URL(frontmatter.cover.src, url).toString(),
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    datePublished: frontmatter.pubDate.toISOString(),
    dateModified: frontmatter.updatedDate ? frontmatter.updatedDate.toISOString() : frontmatter.pubDate.toISOString(),
  };
}

export function getSearchJsonLd(siteTitle: string, siteOrigin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteOrigin,
    logo: new URL("/favicon.svg", siteOrigin).toString(),
    sameAs: ["https://github.com/echocode-dev"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteOrigin}/search/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
