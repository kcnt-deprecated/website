<template>
  <div>
    <nav class="navbar-brand navbar has-transparent">
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link
                v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="button is-info"
              >{{ language }}</nuxt-link>
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

export default {
  head() {
    const version = this.$cookies.get('kcnt-theme')
    // console.log(version)

    this.$cookies.set('kcnt-version', pkg.version)

    const theme = this.$cookies.get('kcnt-theme')
    this.$store.commit('updateTheme', { theme })

    return {
      htmlAttrs: {
        class: [
          this.isLight ? 'light-theme' : '',
          this.isDark ? 'dark-theme' : ''
        ].join(' ')
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

.light-theme {
  @import '~assets/css/light-theme.scss';
  background-color: $white;
}

.dark-theme {
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar {
  &.has-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
