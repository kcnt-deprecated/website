import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import FullVuetify from 'vuetify'
import settings from './vuetify-settings'

export default ({ env }) => {
  Vue.use(
    env === 'production' ? Vuetify : FullVuetify,
    settings({
      isProd: env === 'production'
    })
  )
}
