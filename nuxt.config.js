const path = require('path')
const serveStatic = require('serve-static')

const env = process.env.NODE_ENV

const name = 'KcNt Portfolio'
const pkg = require('./package')

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
  }
}

module.exports = {
  mode: 'universal',
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
    }
  ],

  env: {
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
    color: '#fff'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/ga.js',
      ssr: false
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
    'nuxt-purgecss',
    '@nuxtjs/sentry',
    '@nuxtjs/vuetify',
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
  vuetify: require('./nuxt-config/vuetify')(data),

  /*
   ** Purge CSS module configuration (NO WORK, IT'S REMOVE USED CLASS)
   */
  purgeCSS: require('./nuxt-config/purgecss')(data),

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
