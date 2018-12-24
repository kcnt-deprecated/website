import pkg from '../package.json'

export default function({ app, store }) {
  const cookies = app.$cookies
  const version = cookies.get('kcnt-version')
  cookies.set('kcnt-version', pkg.version)

  const theme = cookies.get('kcnt-theme')
  console.log(`middleware: ${theme}`)

  if (theme !== undefined || theme !== null)
    store.commit('updateTheme', {
      theme
    })
}
