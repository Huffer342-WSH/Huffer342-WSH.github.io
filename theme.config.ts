import { defineThemeConfig } from 'valaxy-theme-yun/node'
export default defineThemeConfig({
  type: 'strato',

  banner: {
    enable: false,
    title: '',
    cloud: {
      enable: false,
    },
  },

  pages: [
    {
      name: '项目列表',
      url: '/projects',
      icon: 'i-ri-gallery-view',
      color: 'var(--va-c-text)',
    }
  ]

})
