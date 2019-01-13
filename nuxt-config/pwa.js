module.exports = ({ name, pkg }) => {
  return {
    workbox: {
      offlinePage: '/'
      // Workbox options
    },
    meta: {
      name: name
    },
    manifest: {
      name: name,
      short_name: 'Portfolio',
      description: pkg.description,
      lang: 'en'
    },
    icon: {
      iconSrc: 'static/resources/images/icon/1x/primary-icon.png'
      // Icon options
    }
  }
}
