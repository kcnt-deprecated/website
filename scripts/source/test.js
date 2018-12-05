const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec

const argv = require('yargs')
  .strict(true)
  .option('all', {
    alias: 'A',
    desc: 'Run every installed browser',
    type: 'boolean',
    conflicts: ['chrome', 'safari', 'firefox', 'browser']
  })
  .option('browsers', {
    alias: 'B',
    desc: 'Custom input browsers',
    type: 'array'
  })
  .option('chrome', {
    alias: 'C',
    desc: 'Run with chrome',
    type: 'boolean'
  })
  .option('safari', { alias: 'S', desc: 'Run with safari', type: 'boolean' })
  .option('firefox', {
    alias: 'F',
    desc: 'Run with firefox',
    type: 'boolean'
  })
  .option('list', {
    alias: 'L',
    desc: 'List all installed browser',
    type: 'boolean'
  })
  .option('headless', {
    alias: 'H',
    desc: 'Run browser run headless',
    type: 'boolean'
  })
  .option('ci', {
    alias: 'I',
    desc: 'Run test in CI',
    type: 'boolean',
    default: false
  })
  .option('color', {
    alias: 'O',
    desc: 'Do you want color or not!',
    type: 'boolean',
    default: true
  })
  .option('dry', {
    alias: 'D',
    desc: 'Dry run and result command, (NOT EXEC)',
    type: 'boolean'
  })
  .option('reporter', {
    alias: 'R',
    desc: 'Pass to testcafe reporter',
    type: 'string'
  })
  .option('silent', {
    alias: 'Q',
    desc: 'No any output occurred, (include both out and err)',
    type: 'boolean',
    default: false
  })
  .option('output', {
    alias: 'P',
    desc: 'Redirect the result to output file',
    type: 'string'
  })
  .command('$0 [files...]').argv

if (argv.ci) {
  argv.color = false
  argv.headless = true
  argv.chrome = true
  argv.reporter = 'xunit:test/results/unit-report.xml'

  if (!argv.silent) console.log(argv)
}

const testcafe = 'testcafe'
const local = path.join('node_modules', '.bin', testcafe)

function headless(v, argv) {
  return `${v}${argv.headless ? ':headless' : ''}`
}

let browser = [] // real browser
let browsers = {} // raw browser
if (argv.chrome) browsers.chrome = true
if (argv.safari) browsers.safari = true
if (argv.firefox) browsers.firefox = true
if (argv.browsers && argv.browsers.length > 0)
  argv.browsers.forEach(v => {
    browsers[v] = true
  })

Object.keys(browsers).forEach(key => {
  if (browsers[key]) {
    browser.push(headless(key, argv))
  }
})

if (argv.all) browser = [headless('all', argv)]

const cmd = fs.existsSync(local) ? local : testcafe

const args = []
if (browser.length > 0) args.push(browser.join(','))
if (argv.color) args.push('--color')
if (argv.reporter && argv.reporter !== '')
  args.push('--reporter', argv.reporter)

if (argv.list) args.push('--list-browsers')
else if (argv.files && argv.files.length > 0) args.push(...argv.files)

const command = `${cmd} ${args.join(' ')}`

if (argv.dry && !argv.silent) console.log(command)
else {
  const child = exec(command, function(err) {
    if (err) process.exit(err.code)
  })

  if (!argv.silent) {
    child.stdin.pipe(process.stdin)
    child.stderr.pipe(process.stderr)
    if (argv.output) child.stdout.pipe(fs.createWriteStream(argv.output))
    else child.stdout.pipe(process.stdout)
  }
}
