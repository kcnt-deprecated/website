export const FetchPersonalInformation = (username, locale = 'en') => {
  const info = require(`../../../static/resources/${username}/personal/information-${locale}.json`)

  return info
}

export const FetchPersonalSocialInformation = username => {
  const info = require(`../../../static/resources/${username}/personal/social.json`)

  return info
}
