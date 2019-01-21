export const possibleList = {
  help: {
    type: 'help',
    message: 'do you want any help?'
  },
  overview: {
    type: 'overview',
    message: 'be summary my work life'
  },
  faq: {
    type: 'faq',
    message: 'any feather information?'
  }
}

export const classifySentenceMessage = message => {
  const { nouns, verbs, adj, sentence } = message

  if (nouns.includes('help')) return possibleList.help
  if (verbs.includes('understand') && sentence.includes('not'))
    return possibleList.help

  if (nouns.includes('summary') || adj.includes('overview'))
    return possibleList.overview

  if (nouns.includes('question') || verbs.includes('question'))
    return possibleList.faq
}
