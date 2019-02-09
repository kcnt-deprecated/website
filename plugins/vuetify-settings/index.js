export default ({ isProd }) => {
  const options = require('./option')
  const theme = require('./theme')
  const icons = require('./icon')

  return {
    treeShake: false,
    iconfont: 'fa4',
    options,
    theme,
    icons
  }
}
