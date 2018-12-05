const pkg = require('./package')

const name = 'KC Portfolio'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Portfolio,VueJS,JS,CSS,Website,Kamontat,Chantrachirathumrong'
      },
      {
        hid: 'author',
        name: 'author',
        content: pkg.author
      },
      {
        hid: 'version',
        name: 'version',
        content: pkg.version
      }
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
    [
      '@nuxtjs/pwa',
      {
        workbox: {
          offlinePage: '/'
          // Workbox options
        },
        meta: {
          name: name
        }
      }
    ],
    // Doc: https://nuxt-community.github.io/nuxt-i18n (NO TEST YET)
    [
      'nuxt-i18n',
      {
        // seo: false,
        lazy: true,
        vueI18nLoader: true,
        langDir: 'lang/',
        baseUrl: 'https://kamontat.space',
        locales: [
          {
            code: 'en',
            file: 'en.js',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'th',
            file: 'th.js',
            name: 'Thai',
            iso: 'th-TH'
          }
        ],
        defaultLocale: 'en'
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
