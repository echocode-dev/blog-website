import { defineConfig } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://www.echocode.dev",
  integrations: [pagefind()],
  markdown: {
    rehypePlugins: [sectionize],
  },
});
