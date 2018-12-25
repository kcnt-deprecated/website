<template>
  <div>
    <nav class="navbar-brand navbar has-background-dark">
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <b-dropdown 
              v-model="language" 
              hoverable>
              <button 
                slot="trigger" 
                class="button is-info">
                <span>{{ language }}</span>
                <b-icon icon="menu-down"/>
              </button>

              <b-dropdown-item 
                v-for="locale in $i18n.locales"
                :key="locale.code" 
                :disabled="locale.code === $i18n.locale" 
                has-link>
                <nuxt-link :to="switchLocalePath(locale.code)">
                  <b-icon
                    v-if="locale.code === $i18n.locale"
                    pack="fas"
                    icon="check"
                    size="is-small"/> {{ locale.name }}
                </nuxt-link>
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="navbar-item">
            
            <div class="buttons">
              <!-- <nuxt-link
                v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="button is-info"
              >{{ language }}</nuxt-link> -->
              <button 
                class="button is-white"
                @click="toggleTheme">
                {{ theme }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import pkg from '../package.json'
import { FetchPersonalInformation } from '@/assets/helper/resources.js'

export default {
  head() {
    // const version = cookies.get('kcnt-version')
    this.$cookies.set('kcnt-version', pkg.version)

    const theme = this.$cookies.get('kcnt-theme')
    if (theme !== undefined || theme !== null)
      this.$store.commit('updateTheme', {
        theme
      })

    // console.log(`head: ${this.theme}`)

    return {
      htmlAttrs: {
        class: this.theme,
        theme: this.theme
      }
    }
  },
  computed: {
    language() {
      return this.$i18n.locales.find(v => v.code === this.$i18n.locale).name
    },
    isLight() {
      return this.theme === 'Light'
    },
    isDark() {
      return this.theme === 'Dark'
    },
    ...mapState(['theme'])
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme')
      this.$cookies.set('kcnt-theme', this.theme, {
        maxAge: 60 * 60 * 24 * 15 // expires in 15 days
      })
    }
  }
}
</script>

<style lang="scss">
// @import '~assets/css/font-awesome.scss'; // comment it because didn't use it for now

.Light {
  @import '~assets/css/light-theme.scss';
  background-color: $white;
}

.Dark {
  @import '~assets/css/dark-theme.scss';
  background-color: $white-ter;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.navbar {
  &.has-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
