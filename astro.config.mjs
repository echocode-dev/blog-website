import { defineConfig } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";

export default defineConfig({
  site: "https://www.echocode.dev",
  markdown: {
    rehypePlugins: [sectionize],
  },
});
