module.exports = ({ isProd, isDev, theme }) => {
  const css = true
  const iconfont = 'fa4'

  const options = require('./vuetify-option')
  const themeConfig = require('./vuetify-theme')
  const icons = require('./vuetify-icon')

  const treeShake = isProd

  return {
    css,
    iconfont,
    options,
    theme: themeConfig,
    icons,
    treeShake
  }
}
