const configs = require("../../scripts/config").autoLoadConfigSync();
const ga = process.env.vuepress_ga;
module.exports = {
  // You can set `title` config at /README.md"
  title: configs.title,
  // You can set `description` config at /README.md"
  description: configs.description,

  base: configs.base,

  plugins: ["@vuepress/active-header-links", "@vuepress/back-to-top"]
    .concat(ga ? ["@vuepress/google-analytics", { ga }] : [])
    .concat("@vuepress/medium-zoom", [
      "@vuepress/pwa",
      {
        updatePopup: true,
      },
    ]),

  themeConfig: {
    lastUpdated: true,
  },
};
