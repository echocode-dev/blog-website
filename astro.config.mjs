import { defineConfig, fontProviders } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";
import expressiveCode from "astro-expressive-code";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
// import playformCompress from "@playform/compress";
import { LOCALES, defaultLang } from "./src/i18n/ui";

export default defineConfig({
  site: "https://echocode.dev",
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
    },
  ],
  i18n: {
    locales: Array.from(LOCALES),
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
    // All the domains we get pics from should go here, so they get optimized by Astro
    domains: ["images.unsplash.com"],
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
    //playformCompress(),
  ], // IMPORTANT: playformCompress should always be last!
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
