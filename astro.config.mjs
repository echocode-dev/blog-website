import { defineConfig } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://www.echocode.dev",
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
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
    ],
  },
});
