import { defineConfig } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";

import expressiveCode from "astro-expressive-code";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://echocode.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
    // All the domains we get pics from should go here, so they get optimized by Astro
    domains: ["docs.astro.build"],
  },
  integrations: [
    pagefind(),
    expressiveCode({
      styleOverrides: {
        borderRadius: "10px",
        frames: {
          frameBoxShadowCssValue: "0",
        },
      },
    }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      sectionize,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: {
            type: "text",
            value: "#",
          },
          headingProperties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
