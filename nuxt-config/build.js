module.exports = ({ isDev }) => {
  return {
    extractCSS: true,
    publicPath: '/_kcnt/',
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
      // config.module.rules.push({
      //   test: /\.styl$/,
      //   loader: ['style-loader', 'css-loader', 'stylus-loader']
      // })

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
