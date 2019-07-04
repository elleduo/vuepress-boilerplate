module.exports = {
  title: "%%Hello VuePress",
  description: "%%Just playing around",

  // base: "/bar/",

  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    [
      "@vuepress/google-analytics",
      {
        ga: "%%",
      },
    ],
    "@vuepress/medium-zoom",
    [
      "@vuepress/pwa",
      {
        updatePopup: true,
      },
    ],
  ],

  themeConfig: {
    lastUpdated: true,
  },
};
