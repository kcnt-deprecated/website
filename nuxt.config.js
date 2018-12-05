const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',
    // Doc: https://nuxt-community.github.io/nuxt-i18n (NO TEST YET)
    [
      'nuxt-i18n',
      {
        // seo: false,
        baseUrl: 'https://kamontat.space',
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'th',
            iso: 'th-TH'
          }
        ],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              welcome: 'Welcome'
            }
          }
        }
      }
    ],
    // Doc: https://github.com/Developmint/nuxt-purgecss
    'nuxt-purgecss'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Purge CSS module configuration (NO TEST YET)
  */
  purgeCSS: {
    // See https://github.com/Developmint/nuxt-purgecss#properties-in-depth
    mode: 'postcss'
  },

  /*
  ** Redirect module configuration
  */
  redirect: [
    // See https://github.com/nuxt-community/redirect-module#usage
    // Redirect options here
    { from: '^/admin', to: '/cms' }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
