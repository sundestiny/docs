const moment = require("moment");
moment.locale("zh-cn");
module.exports = {
  base: "/docs/",
  title: "飞翔的鱼",
  description: "飞翔的鱼博客笔记",
  head: [
    ["meta", { name: "author", content: "飞翔的鱼" }],
    ["meta", { name: "keywords", content: "飞翔的鱼 博客 vuepress" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "about", link: "/about/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: ["/", "/about"],
    lastUpdated: "更新时间",
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL");
        },
      },
    ],
  ],
};
