// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '技术小匠·笔记',
  tagline: '积跬步以至千里，致敬每个爱学习的你。!',
  url: 'https://notes.frankfeekr.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Landscape.svg',
  organizationName: 'frank-lam', // Usually your GitHub org/user name.
  projectName: 'fs-notes', // Usually your repo name.

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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        logo: {
          alt: 'My Site Logo',
          src: 'img/idea.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: '公共部分',
          // },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'introduction',
            label: '前言',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'backend',
            label: '后台架构',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'frontend',
            label: '前端技术',
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
                label: 'LinTools - 开发者的在线导航',
                href: 'https://tools.frankfeekr.cn/',
              },
              {
                label: 'frankfeekr.cn - 我的博客',
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
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
        copyright: `Copyright © ${new Date().getFullYear()} 技术之禅`,
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
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6
      },
      zoomSelector: '.markdown img',

    }),
};

module.exports = config;
