const pkg = require('../../package.json')

module.exports = {
  base: '/Portfolio/docs/',
  title: 'Documents',
  description: 'Document for Portfolio website',
  head: [
    [
      'meta',
      {
        'data-hid': 'author',
        name: 'author',
        content: pkg.author
      }
    ],
    [
      'meta',
      {
        'data-hid': 'version',
        name: 'version',
        content: pkg.version
      }
    ],
    [
      'meta',
      {
        'data-hid': 'keywords',
        name: 'keywords',
        content:
          'document,documents,kamontat,chantrachirathumrong,website,vuepress,ssr,portfolio'
      }
    ]
  ]
}
