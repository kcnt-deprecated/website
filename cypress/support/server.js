import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

export class Server {
  constructor() {
    this.rootDir = resolve(__dirname, '..', '..')
    // console.log(`Root: ${this.rootDir}`)

    this.config = require(resolve(this.rootDir, 'nuxt.config.js'))
    this.config.rootDir = this.rootDir // project folder
    this.config.dev = false // production build
    this.config.mode = 'universal' // Isomorphic application

    this._start = true
    this._nuxt = null

    this.port = 4000
    this._url = 'localhost'
  }

  toggle() {
    const tmp = this._start // temp
    this._start = !this._start // switch

    if (tmp) return this.start()
    return this.stop()
  }

  async start() {
    console.log('Starting.. server')

    this._nuxt = new Nuxt(this.config)
    await new Builder(this._nuxt).build()
    this._nuxt.listen(this.port, this._url)
  }

  async stop() {
    console.log('Stoping.. server')

    await this._nuxt.close()
  }

  url() {
    return `http://${this._url}:${this.port}`
  }

  nuxt() {
    return this._nuxt
  }

  renderRoute(path, context) {
    return this._nuxt.renderRoute(path, context)
  }

  renderAndGetWindow(url) {
    return this._nuxt.renderAndGetWindow(url)
  }
}
