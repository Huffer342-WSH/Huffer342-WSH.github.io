import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'


import { addonWaline } from 'valaxy-addon-waline'
// import { addonAlgolia } from 'valaxy-addon-algolia'



/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

   // 设置 valaxy-addon-waline 配置项
   addons: [
    addonWaline({
      serverURL: 'https://waline-deploy-on-vercel.vercel.app/',
      pageview: true,
      comment: true,
    }),
  ],



  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },
})
