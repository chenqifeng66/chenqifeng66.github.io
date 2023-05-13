import { defineUserConfig, defaultTheme } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";

export default defineUserConfig({
  lang: "zh-CN",
  title: "MyBlog",
  description: "这是我的第一个 VuePress 站点",
  theme: recoTheme({
    // docsRepo: "https://gitlab.com/owner/name",
    // docsBranch: "master",
    // docsDir: "docs",
    // editLinkPattern: ":repo/-/edit/:branch/:path",
    // logo
    logo: "/images/fox.png",
    // github地址
    repo: "https://github.com/chenqifeng66",
    // 主页
    home: "/",
    // 默认主题配置
    locales: {
      "en-US": {
        navbar: [
          {
            text: "HOME",
            link: "/",
          },
        ],
        colorModeSwitch: true,
        colorMode: "dark",
        logo: "http://rongapi.cn/images/logo.png",
        repo: "http://gitee.org/vuejs/vuepress",
        repoLabel: "Source",
      },
    },
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: [
      {
        text: "关于我们",
        link: "/about",
      },
    ],
  }),
});
