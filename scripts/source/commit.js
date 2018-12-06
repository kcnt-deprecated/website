const { prompt } = require('enquirer')
const color = require('ansi-colors')
const exec = require('child_process').exec
const argv = require('yargs').argv

const symbols = color.symbols

const theme = {
  header: color.cyanBright,
  example: color.gray,
  code: color.green.dim,
  highlight: color.redBright,
  selected: color.blueBright,
  search: {
    highlight: color.magenta
  }
}

const commit_type = [
  {
    name: 'build',
    message: `${theme.header(
      'Build'
    )}: Changes that affect the build system or external dependencies`,
    hint: '(example scopes: gulp, broccoli, npm)'
  },
  {
    name: 'ci',
    message: `${theme.header(
      'CI'
    )}: Changes to our CI configuration files and scripts`,
    hint: '(example scopes: Travis, Circle, BrowserStack, SauceLabs)'
  },
  {
    name: 'chore',
    message: `${theme.header(
      'Chore'
    )}: Other changes that don't modify src or test files`
  },
  {
    name: 'docs',
    message: `${theme.header('Docs')}: Documentation only changes`
  },
  {
    name: 'feat',
    message: `${theme.header('Feat')}: A new feature`
  },
  {
    name: 'fix',
    message: `${theme.header('Fix')}: A bug fix`
  },
  {
    name: 'perf',
    message: `${theme.header('Perf')}: A code change that improves performance`
  },
  {
    name: 'refactor',
    message: `${theme.header(
      'Refactor'
    )}: A code change that neither fixes a bug nor adds a feature`
  },
  {
    name: 'revert',
    message: `${theme.header('Revert')}: the commit reverts a previous commit.`,
    hint: `In the body it should say: ${theme.code(
      'This reverts commit <hash>'
    )}`
  },
  {
    name: 'style',
    message: `${theme.header(
      'Style'
    )}: Changes that do not affect the meaning of the code`,
    hint: '(white-space, formatting, missing semi-colons, etc)'
  },
  {
    name: 'test',
    message: `${theme.header(
      'Test'
    )}: Adding missing tests or correcting existing tests`
  }
]

const commit_length = 72
const commit_line_maximum = 100

function isExist(v) {
  return v !== undefined && v !== null && v !== '' && v !== '\n'
}

function exit(code) {
  const c = code || 1
  process.exit(c)
}

const simplify = {
  /**
   * Simplify to
   *
   * 1. if only new line or any falsy value will changes to empty string
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  toempty: value => (!value || value === '\n' ? '' : value),
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. remove leading and trailing whitespace
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  lower: value => {
    return simplify
      .toempty(value)
      .trim()
      .toLowerCase()
  },
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. remove leading and trailing whitespace
   * 3. remove trailing dot
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  subject: value => {
    return simplify.lower(value).replace(/\.+$/, '')
  },
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. replace all spacebar to -
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  slug: value => {
    return simplify.lower(value).replace(/ /g, '-')
  }
}

const format = {
  maximumLine: v => {
    const line = v.split('\n')
    const last = line[line.length - 1]
    const size = last.length

    if (size < commit_line_maximum) return `${v} ${color.dim(`(${size})`)}`
    else return `${color.red(v)} ${color.red.dim.underline(`(ADD NEW LINE)`)}`
  },
  breakchange: v => {
    return `${color.dim('BREAKING CHANGE:')} ${v}`
  },
  issue: v => {
    const sep = ' '
    const prefix = v => {
      if (v.includes('#')) return v
      return `${color.dim('#')}${v}`
    }

    if (typeof v === 'object') return v.map(t => prefix(t))

    return v
      .split(sep)
      .map(t => prefix(t))
      .join(sep)
  }
}

const result = {
  breakchange: v => {
    const r = v.trim()
    if (r === '' || r === '\n') return r
    return `BREAKING CHANGE: ${v.trim()}`
  },
  issue: v => {
    const prefix = v => {
      if (v.includes('#')) return v
      return `#${v}`
    }

    return v.map(t => prefix(t))
  }
}

// prompts
;(async () => {
  try {
    const response = await prompt([
      {
        type: 'autocomplete',
        name: 'type',
        message: `Choose your ${theme.highlight('commit type')}!`,
        styles: { primary: theme.selected },
        highlight: theme.search.highlight,
        suggest(typed, choices) {
          return choices.filter(choice => choice.message.includes(typed))
        },
        choices: commit_type
      },
      {
        type: 'text',
        name: 'scope',
        message: `Input ${theme.highlight('commit scope')} or enter to skip!`,
        required: false,
        result: simplify.slug
      },
      {
        type: 'text',
        name: 'subject',
        message: `Input ${theme.highlight('commit subject')}`,
        required: true,
        result: simplify.subject,
        format: v => {
          const size = v.length
          if (size < commit_length) return `${v} ${color.dim(`(${size})`)}`
          else return `${color.red(v)} ${color.red.dim.underline(`(${size})`)}`
        },
        validate: v => {
          if (!v) return 'Subject cannot be Falsy'
          if (v.length < 0) return 'Subject cannot be empty string'
          if (v.length > commit_length)
            return `Subject cannot more than ${commit_length}`
          return true
        }
      },
      {
        type: 'text',
        name: 'body',
        message: `Input ${theme.highlight(
          'commit body'
        )} or enter 2 times to skip`,
        required: false,
        initial: '',
        multiline: true,
        format: format.maximumLine,
        result: v => v.trim()
      },
      {
        type: 'text',
        name: 'breakchange',
        message: `Input ${theme.highlight(
          'commit BREAK CHANGE'
        )} or enter 2 times to skip`,
        required: false,
        multiline: true,
        format: format.breakchange,
        result: result.breakchange
      },
      {
        type: 'list',
        name: 'issues',
        message: `Input ${theme.highlight('commit issues')} or skip by enter`,
        hint: 'Type space-separated',
        separator: / /,
        required: false,
        format: format.issue,
        result: result.issue
      }
    ])

    const requires = [
      'type',
      'scope',
      'subject',
      'body',
      'breakchange',
      'issues'
    ]

    if (requires.some(v => response[v] === undefined))
      throw new Error('User cancel prompts')

    let footer = ''
    if (response.issues && response.issues.length > 0)
      footer +=
        `This ` + response.issues.map(v => `closes ${v}`).join(', ') + `\n`
    if (isExist(response.breakchange)) footer += response.breakchange

    const msg = `${response.type}${
      isExist(response.scope) ? `(${response.scope})` : ''
    }: ${response.subject}

${isExist(response.body) ? `${response.body}\n\n` : ''}${
      isExist(footer) ? `${footer}` : ''
    }`

    console.log(color.dim(`commit message: \n${msg}`))

    const command = `git commit -m "${msg}" ${process.argv
      .slice(2)
      .join(' ')
      .replace(/--dry/g, '')}`

    if (argv.dry) console.log(command)
    else exec(command)
  } catch (e) {
    console.error(e)
  }
})()
