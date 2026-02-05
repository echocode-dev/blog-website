import { defineConfig } from "astro/config";
import sectionize from "@hbsnow/rehype-sectionize";

export default defineConfig({
  markdown: {
    rehypePlugins: [sectionize],
  },
});
