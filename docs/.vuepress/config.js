import { defineUserConfig, defaultTheme } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/MyBlog/",
  lang: "zh-CN",
  title: "MyBlog",
  description: "欢迎来到我的个人博客",
  name: "reco",
  theme: hopeTheme({
    // logo
    logo: "/images/fox.svg",
    // github地址
    repo: "https://github.com/chenqifeng66/MyBlog",
    // 主页
    home: "/",
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
    plugins: {
      copyCode: {},
      git: true,
    },
    sidebar: "auto",
  }),
  plugins: [
    // 搜索功能
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
