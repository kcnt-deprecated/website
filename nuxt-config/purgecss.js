module.exports = () => {
  return {
    enabled: false,
    mode: 'postcss',
    paths: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js'
    ],
    styleExtensions: ['.css', '.scss'],
    keyframes: true,
    fontFace: true
  }
}
