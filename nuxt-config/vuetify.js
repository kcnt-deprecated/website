module.exports = ({ isProd, isDev }) => {
  return {
    iconfont: 'fa4',
    theme: require('./vuetify-theme'),
    icons: require('./vuetify-icon'),
    treeShake: isProd
  }
}
