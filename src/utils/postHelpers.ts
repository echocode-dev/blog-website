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
