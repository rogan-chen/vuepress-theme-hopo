import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "海狗",
      description: "海狗写博客的地方",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
