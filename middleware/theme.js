export default function({ app, store }) {
  const cookies = app.$cookies

  const version = cookies.get('kcnt-version')
  // console.log(version)

  const theme = cookies.get('kcnt-theme')
  store.commit('updateTheme', {
    theme
  })

  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
}
