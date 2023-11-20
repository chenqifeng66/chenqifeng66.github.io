import { defineUserConfig, defaultTheme } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "C",
  description: "欢迎来到我的个人博客",
  // 打包路径
  dest: "dist/",
  // favicon 图标
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  name: "reco",
  theme: hopeTheme({
    // logo
    logo: "/images/fox.svg",
    // github地址
    repo: "https://github.com/chenqifeng66/",
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
        text: "笔记",
        icon: "article",
        children: [
          {
            text: "CSS",
            link: "/css",
          },
          {
            text: "JavaScript",
            link: "/javascript",
          },
          {
            text: "TypeScript",
            link: "/typescript",
          },
          {
            text: "Git",
            link: "/git",
          },
          {
            text: "Vue",
            link: "/vue",
          },
          {
            text: "业务场景",
            link: "/业务场景",
          },
          {
            text: "组件库",
            link: "/components",
          },
        ],
      },
    ],
    plugins: {
      copyCode: {},
      git: true,
      // blog: true,
      mdEnhance: {
        demo: true,
        // 自定义容器
        container: true,
      },
      // 代码主题
      prismjs: {
        // 日间模式时，代码块以夜间模式的方式呈现
        light: "one-dark",
      },
    },
    // blog: {
    //   name: "Chen",
    //   description: "只会一点前端",
    // },
    sidebar: {
      "/css/": "structure",
      "/vue/": "structure",
      "/业务场景/": "structure",
      "/javascript/": "structure",
      "/typescript/": "structure",
      "/git/": "structure",
      "/components/": "structure",
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
