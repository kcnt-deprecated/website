const generateIconPath = () => {
  const size = ['dot5x', '1x', '300ppi']
  const type = ['round-icon', 'icon']
  const color = ['dark', 'light', 'primary']

  const result = []

  color.forEach(c => {
    size.forEach(s => {
      type.forEach(t => {
        const afterIconPath = s === 'dot5x' ? '0.5x' : s
        const sizePath = s === '1x' ? '' : `-${s}`
        const postfix = s === '300ppi' ? '-high' : s === 'dot5x' ? '@0.5x' : ''

        result.push({
          from: `/logo/png/${c}${t
            .replace(/[-]?icon/g, '')
            .replace('round', '-round')}${sizePath}`,
          to: `/resources/images/icon/${afterIconPath}/${c}-${t}${postfix}.png`
        })
      })
    })
  })

  color.forEach(c => {
    type.forEach(t => {
      result.push({
        from: `/logo/svg/${c}${t
          .replace(/[-]?icon/g, '')
          .replace('round', '-round')}`,
        to: `/resources/images/icon/svg/${c}-${t}.svg`
      })
    })
  })

  // console.log(result.map(v => v.from)) // path all icon redirect path

  return result
}

module.exports = ({ isProd }) => {
  const result = []
  if (isProd)
    result.push({
      from: '^/images/(.*)$',
      to: '/resources/images/$1'
    })

  if (isProd) result.push(...generateIconPath())

  return result
}
