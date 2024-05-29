import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://huffer342-wsh.github.io/',
  lang: 'zh-CN',
  title: 'Huffer\'s blog',
  subtitle: ' ',

  author: {
    name: 'Huffer',
    avatar:'https://avatars.githubusercontent.com/u/78366424?v=4',
    status: {
      emoji: '😅',
    },
  },

  description: ' ',

  // 代码块高度限制
  codeHeightLimit:500,

  mediumZoom: { enable: true },

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Huffer342-WSH',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    
  ],


  favicon: "https://cdn.jsdelivr.net/gh/Huffer342-WSH/Huffer342-WSH.github.io/public/favicon.png",

  search: {
    enable: true,
    type: 'fuse',
  },

  comment: {
    enable: true,
  },

  statistics: {
    enable: true,
  },


})
