module.exports = ({ pkg }) => {
  return [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'Portfolio,VueJS,JS,CSS,Website,Nuxt,Personal'
    },
    {
      hid: 'author',
      name: 'author',
      content: pkg.author
    },
    {
      hid: 'version',
      name: 'version',
      content: pkg.version
    }
  ]
}
