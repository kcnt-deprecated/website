const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const generateObject = (response, obj, name, color, linkFn) => {
  if (obj[name])
    response.push({
      name: `${capitalizeFirstLetter(name)} (${obj[name]})`, // username
      icon: name,
      link: linkFn(obj[name]),
      color: color
    })
}

export const getSocialObject = any => {
  const defined = []

  generateObject(
    defined,
    any,
    'facebook',
    '#3b5998',
    u => `https://facebook.com/${u}`
  )

  generateObject(
    defined,
    any,
    'twitter',
    '#00aced',
    u => `https://twitter.com/${u}`
  )

  generateObject(
    defined,
    any,
    'instagram',
    '#e56969',
    u => `https://www.instagram.com/${u}`
  )

  generateObject(
    defined,
    any,
    'line',
    '#00c300',
    u => `http://line.me/ti/p/~${u}`
  )

  generateObject(
    defined,
    any,
    'linkedin',
    '#0077b5',
    u => `https://www.linkedin.com/in/${u}`
  )

  generateObject(
    defined,
    any,
    'medium',
    '#00ab6c',
    u => `https://medium.com/@${u}`
  )

  generateObject(
    defined,
    any,
    'github',
    '#4078c0',
    u => `https://github.com/${u}`
  )

  generateObject(
    defined,
    any,
    'storylog',
    '#2eb494',
    u => `https://storylog.co/${u}`
  )
  return defined
}
