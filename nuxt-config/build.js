const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const { VuetifyProgressiveModule } = require('vuetify-loader')

module.exports = ({ isDev }) => {
  return {
    extractCSS: true,
    publicPath: '/_kcnt/',
    transpile: /^vuetify/,
    splitChunks: {
      layouts: true,
      pages: true
    },
    analyze: {
      analyzerMode: isDev ? 'static' : 'disable',
      reportFilename: 'report.html',
      openAnalyzer: false
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.plugins.push(new VuetifyLoaderPlugin())

      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      const vueLoaderOptionModule = vueLoader.options.compilerOptions.modules
      vueLoaderOptionModule.push(VuetifyProgressiveModule)

      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        resourceQuery: /vuetify-preload/,
        use: [
          'vuetify-loader/progressive-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 8000
            }
          }
        ]
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // console.log(config.module.rules)
    }
  }
}
