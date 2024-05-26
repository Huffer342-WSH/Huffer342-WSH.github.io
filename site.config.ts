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

  mediumZoom: { enable: true },

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Huffer342-WSH',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    
  ],



  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

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
