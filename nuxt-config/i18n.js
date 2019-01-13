module.exports = ({ baseUrl }) => {
  return {
    vueI18nLoader: true,
    lazy: true,
    langDir: './lang/',
    baseUrl: baseUrl,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'kcnt-i18n'
    },
    locales: [
      {
        code: 'en',
        name: 'english',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'th',
        name: 'thai',
        iso: 'th-TH',
        file: 'th.js'
      }
    ],
    defaultLocale: 'en'
  }
}
