const LRU = require('lru-cache')
const pkg = require('./package')

const env = process.env.NODE_ENV

const name = 'KcNt Portfolio'

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

const data = {
  pkg,
  name,
  env,
  branch: process.env.BRANCH,
  baseUrl: env === 'production' ? 'https://kcnt.info' : 'http://localhost:3000',
  isProd: env === 'production',
  isDev: env === 'development',
  onesignal: {
    devID: process.env.ONESIGNAL_DEV_APPID,
    prodID: process.env.ONESIGNAL_APPID
  },
  theme: {
    cache: themeCache,
    minify: css => {
      return env === 'production' ? css.replace(/[\s|\r\n|\r|\n]/g, '') : css
    }
  }
}

module.exports = {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: name,
    meta: require('./nuxt-config/meta')(data),
    script: [
      {
        innerHTML:
          'window.$crisp=[];window.CRISP_WEBSITE_ID="dff2175a-6a08-4b4d-9418-7ff4da4c97e7";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
   ** Include css not in components
   */
  css: [
    {
      src: '@fortawesome/fontawesome-free/css/all.css'
    },
    {
      src: 'flag-icon-css/css/flag-icon.css'
    },
    {
      src: '~assets/style/app.styl'
    }
  ],

  env: {
    nodeEnv: env,
    baseUrl: data.baseUrl,
    version: pkg.version,
    license: pkg.license,
    buildDate: +new Date(),
    pkg: pkg
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~plugins/vuetify.js'
    },
    {
      src: '~plugins/scrollto.js'
    },
    {
      src: '~plugins/checkView.js'
    }
  ],

  router: {
    middleware: 'manage-cookies'
  },

  generate: {
    subFolders: false,
    routes: ['404']
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/redirect-module',
    // Doc: https://github.com/Developmint/nuxt-purgecss (NOT TESTED)
    // 'nuxt-purgecss',
    '@nuxtjs/sentry',
    [
      'cookie-universal-nuxt',
      {
        parseJSON: false
      }
    ],
    '@nuxtjs/onesignal',
    // Doc: https://pwa.nuxtjs.org/
    ['@nuxtjs/pwa', require('./nuxt-config/pwa')(data)],
    ['nuxt-i18n', require('./nuxt-config/i18n')(data)]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Vuetify module configuration
   */
  // vuetify: require('./nuxt-config/vuetify')(data),

  /*
   ** Purge CSS module configuration (NO WORK, IT'S REMOVE USED CLASS)
   */
  // purgeCSS: require('./nuxt-config/purgecss')(data),

  /*
   ** Sentry module configuration
   */
  sentry: require('./nuxt-config/sentry')(data),

  oneSignal: require('./nuxt-config/onesignal')(data),

  redirect: require('./nuxt-config/redirect')(data),

  /*
   ** Build configuration
   */
  build: require('./nuxt-config/build')(data)
}
