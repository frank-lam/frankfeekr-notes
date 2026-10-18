// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '技术小匠·笔记',
  tagline: '积跬步以至千里，致敬每个爱学习的你！',
  url: 'https://notes.frankfeekr.cn',
  baseUrl: '/',
  // 笔记里引用的附件（如 Obsidian 的 pptx）不一定都在仓库里，
  // 这里用 warn 而不是 throw，避免单个失效链接阻塞整站发布
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Landscape.svg',
  organizationName: 'frank-lam', // Usually your GitHub org/user name.
  projectName: 'frankfeekr-notes', // Usually your repo name.

  // themes: [
  //   // ... Your other themes.
  //   [
  //     require.resolve("@easyops-cn/docusaurus-search-local"),
  //     {
  //       // ... Your options.
  //       // `hashed` is recommended as long-term-cache of index file is possible.
  //       hashed: true,
  //       // For Docs using Chinese, The `language` is recommended to set to:
  //       // ```
  //       language: ["en", "zh"],
  //       // ```
  //       // When applying `zh` in language, please install `nodejieba` in your project.
  //     },
  //   ],
  // ],

  plugins: [
    'plugin-image-zoom'
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true
      }
    ]
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/frank-lam/frankfeekr-notes/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // autoCollapseSidebarCategories: true,
      navbar: {
        title: '技术小匠·笔记',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/idea.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'introduction',
            label: '前言',
          },
          {
            activeBasePath: "docs", // 路径
            label: "后台架构",
            position: "left",
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'backend_java',
                label: 'Java 基础知识',
              },
              {
                type: 'docSidebar',
                sidebarId: 'backend_python',
                label: 'Python 基础知识',
              },
              {
                type: 'docSidebar',
                sidebarId: 'backend',
                label: '总览',
              },
            ],
          },
          {
            activeBasePath: "docs", // 路径
            label: "前端技术",
            position: "left",
            items: [

              {
                type: 'docSidebar',
                sidebarId: 'frontend_es6',
                label: 'ECMAScript2015~2020语法全解析',
              },
              {
                type: 'docSidebar',
                sidebarId: 'frontend_angular',
                label: 'Angualr',
              },
              // {
              //   label: "ECMAScript2015~2020语法全解析",
              //   to: "/docs/frontend/es6",
              // },
              // {
              //   label: "JavaSciprt",
              //   to: "/docs/FE/javaSciprt",
              // },
              {
                type: 'docSidebar',
                sidebarId: 'frontend',
                label: '总览',
              },
            ],
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tools',
            label: '技术工具',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'about',
            label: '关于本站',
          },
          {
            type: 'dropdown',
            label: '常用工具',
            position: 'left',
            items: [
              {
                label: '🔍 本站搜索',
                to: '/search',
              },
              {
                label: '😄 EMOJIALL',
                href: 'https://www.emojiall.com/zh-hans/all-emojis',
              },
              {
                label: '🧭 LinTools - 开发者的在线导航',
                href: 'https://tools.frankfeekr.cn/',
              },
              {
                label: '👨‍💻 frankfeekr.cn - 我的博客',
                href: 'https://frankfeekr.cn/',
              }
            ],
          },
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'mySidebar',
          //   label: 'docSidebar',
          // },
          // {
          //   type: 'doc',
          //   docId: 'about/官方文档',
          //   position: 'left',
          //   label: '关于本站',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'dropdown',
            label: 'Links',
            position: 'right',
            items: [
              {
                label: '⚡️frankfeekr-notes/actions',
                href: 'https://github.com/frank-lam/frankfeekr-notes/actions',
              },
              {
                label: 'frankfeekr-notes/issues',
                href: 'https://github.com/frank-lam/frankfeekr-notes/issues',
              },
              {
                label: 'todolist/issues/10',
                href: 'https://github.com/frank-lam/todolist/issues/10',
              },
              {
                label: 'todolist/issues',
                href: 'https://github.com/frank-lam/todolist/issues',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/frank-lam/fullstack-tutorial',
              }
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        // respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 技术小匠 · 知识笔记`,
      },
      prism: {
        // theme: require('prism-react-renderer/themes/dracula'),
        // theme: require('prism-react-renderer/themes/duotoneDark'),
        // theme: require('prism-react-renderer/themes/duotoneLight'),
        // theme: require('prism-react-renderer/themes/github'),
        // theme: require('prism-react-renderer/themes/nightOwl'),
        // theme: require('prism-react-renderer/themes/nightOwlLight'),
        // theme: require('prism-react-renderer/themes/oceanicNext'),
        // theme: require('prism-react-renderer/themes/okaidia'),
        theme: require('prism-react-renderer/themes/palenight'),
        // theme: require('prism-react-renderer/themes/shadesOfPurple'),
        // theme: require('prism-react-renderer/themes/synthwave84'),
        // theme: require('prism-react-renderer/themes/ultramin'),
        // theme: require('prism-react-renderer/themes/vsDark'),
        // theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ["kotlin", "java"],
        // Adding Java Syntax highlighting makes dependency Redoc break · Issue #7209 · facebook/docusaurus
        // https://github.com/facebook/docusaurus/issues/7209  
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6
      },
      // hideableSidebar: true, // 可以折叠隐藏的侧边栏
      zoomSelector: '.markdown img',
    }),
};

module.exports = config;
