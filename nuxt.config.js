const pkg = require('./package')

const name = 'KC Portfolio'
const env = process.env.NODE_ENV

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
    // script: [
    //   {
    //     innerHTML:
    //       'var _sz=_sz||{};_sz.appId="951278c3",function(){var e=document.createElement("script");e.src="https://cdn.signalzen.com/signalzen.js",e.setAttribute("async","true"),document.documentElement.firstChild.appendChild(e);var t=setInterval(function(){"undefined"!=typeof SignalZen&&(clearInterval(t),new SignalZen(_sz).load())},10)}();',
    //     type: 'text/javascript'
    //   }
    // ],
    // __dangerouslyDisableSanitizers: ['script']
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
    '@nuxtjs/sentry',
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
        },
        manifest: {
          name: name,
          short_name: 'Portfolio',
          description: pkg.description,
          lang: 'en'
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
        baseUrl: 'https://kcnt.info',
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
  ** Sentry module configuration
  */
  sentry: {
    public_key: 'ae4134e4a62b4ccd8bc0b7b7aab7e7c7',
    project_id: '1338780',
    config: {
      // Additional config
      environment: env,
      release: `portfolio@${pkg.version}`,
      debug: env === 'development'
    }
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
