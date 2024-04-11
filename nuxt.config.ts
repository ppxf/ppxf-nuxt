export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  eslint: {
    /* module options */
    lintOnStart: false,
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      },
    ],
    lazy: true,
    langDir: 'language',
    defaultLocale: 'en',
  },
  imports: {
    dirs: ['stores'],
  },
})
