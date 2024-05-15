import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// import { addonAlgolia } from 'valaxy-addon-algolia'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: false,
      title: '云游君的小站',
      cloud: {
        enable: true,
      },
    },



    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },

    menu:{
      custom:{
        title: "hello",
        url: "hello",
        icon: "hello",

      }

    }
  },

  unocss: { safelist },
})
