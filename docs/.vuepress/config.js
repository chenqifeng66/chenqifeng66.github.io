import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "MyBlog",
  description: "欢迎来到我的个人博客",
  theme: defaultTheme({
    // logo
    logo: "/images/fox.svg",
    // github地址
    repo: "https://github.com/chenqifeng66",
    // 主页
    home: "/",
    // 默认主题配置
    // locales: {
    //   "en-US": {
    //     navbar: [
    //       {
    //         text: "HOME",
    //         link: "/",
    //       },
    //     ],
    //     colorModeSwitch: true,
    //     colorMode: "dark",
    //     logo: "http://rongapi.cn/images/logo.png",
    //     repo: "http://gitee.org/vuejs/vuepress",
    //     repoLabel: "Source",
    //   },
    // },
    navbar: [
      {
        text: "介绍",
        link: "/intro/",
      },
      {
        text: "文档",
        children: [
          {
            text: "HTML",
            link: "/html",
          },
          {
            text: "CSS",
            link: "/css",
          },
          {
            text: "Vuepress",
            link: "/vuepress",
          },
        ],
      },
    ],
    sidebar: "auto",
  }),
});
