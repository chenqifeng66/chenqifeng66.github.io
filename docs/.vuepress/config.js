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
    // 图标资源
    iconAssets: "iconfont",
    navbar: [
      {
        text: "主页",
        link: "/",
        icon: "home",
      },
      {
        text: "介绍",
        link: "/intro/",
        icon: "profile",
      },
      {
        text: "文档",
        icon: "article",
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
            text: "JavaScript",
            link: "/javascript",
          },
          {
            text: "Vue",
            link: "/vue",
          },
        ],
      },
    ],
    plugins: {
      copyCode: {},
      git: true,
      blog: true,
      mdEnhance: {
        demo: true,
        // 自定义容器
        container: true,
      },
    },
    blog: {
      name: "Chen",
      description: "只会一点前端",
    },
    sidebar: {
      "/css/": "structure",
      "/vue/": "structure",
    },
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
