module.exports = ({ isDev }) => {
  return {
    enabled: false,
    mode: isDev ? 'postcss' : 'webpack',
    paths: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js'
    ],
    styleExtensions: ['.css', '.scss'],
    keyframes: false,
    fontFace: false
  }
}
