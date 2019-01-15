<template>
  <v-app 
    :dark="isDark">

    <v-navigation-drawer
      v-model="appendNavbar"
      style="display: flex; flex-direction: column;"
      right
      temporary
      fixed
      app>

      <v-list
        v-for="header in headers"
        :key="header"
        dense
        two-line
        subheader>

        <v-subheader>{{ $t('sidebar.header.'+header) }}</v-subheader>
        <v-list-tile 
          v-for="value in headerObject[header]"
          :key="value.name"
          :href="transformLink(value.link)">
          <v-list-tile-action>
            <v-icon v-text="$vuetify.icons[value.icon]"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('sidebar.'+header+'.'+value.name) }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ $t('sidebar.'+header+'.'+value.name+'Description') }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider/>

      <v-list
        dense
        subheader>
        <v-subheader>{{ $t('sidebar.header.setting') }}</v-subheader>

        <v-list-tile @click="toggleTheme()">

          <v-list-tile-action>
            <v-icon v-text="themeIcon"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t('sidebar.header.theme') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <span 
                :class="'flag-icon-'+getFlag(languageCode)" 
                class="flag-icon"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('sidebar.header.language') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="locale in $i18n.locales"
            :key="'lang-'+locale.name"
            :to="switchLocalePath(locale.code)"
            nuxt>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('language.'+locale.name) }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <span 
                :class="'flag-icon-'+getFlag(locale.code)" 
                class="flag-icon"/>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>

      <v-spacer/>

      <v-list>
        <v-list-group no-action>
          <v-list-tile slot="activator">
            <v-list-tile-action/>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('sidebar.developments.title') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="value in developments"
            :key="'dev-'+value.name"
            :href="transformLink(value.link)">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('sidebar.developments.'+value.name) }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-text="$vuetify.icons[value.icon]"/>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>

      <v-list
        dense
        two-line>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon v-text="$vuetify.icons.version"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t('sidebar.setting.version') }}: {{ version }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ $t('sidebar.setting.build') }}: {{ buildDate }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
      color="primary"
      app
      dense
      flat
      fixed>
      <v-spacer/>
      <v-toolbar-items>
        <v-toolbar-side-icon @click="toggleNavbar()"/>
      </v-toolbar-items>
    </v-toolbar>

    <v-container >
      <nuxt/>
    </v-container>

    <v-footer 
      app
      fixed
      height="auto"
      color="white"
      class="py-2">
      <v-layout
        justify-center
        row
        wrap>
        <v-tooltip 
          v-for="(social, i) in socials" 
          :key="'social-'+social.name+'-'+i" 
          :color="social.color"
          top>
          <v-btn
            slot="activator"
            :href="social.link"
            :color="social.color"
            target="_blank"
            class="white--text"
            fab
            icon
            small >
            <v-icon v-text="$vuetify.icons[social.name]"/>
          </v-btn>
          <span>{{ social.username }}</span>
        </v-tooltip>
      </v-layout>
    </v-footer>

    <!-- <v-footer class="pa-3">
      <v-btn
        v-for="(social, i) in socials"
        :key="'social-'+social.name+'-'+i"
        color="secondary"
        class="white--text"
        fab
        icon
        flat
          round
        small
      >
        <v-icon v-text="$vuetify.icons[social.name]"/>
      </v-btn>
      <v-spacer/>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import { FetchPersonalSocialInformation } from '@/assets/helper/resources.js'
import { getSocialObject } from '@/assets/helper/social.js'

export default {
  head() {
    // const version = cookies.get('kcnt-version')
    this.$cookies.set('kcnt-version', process.env.version)
    const theme = this.$cookies.get('kcnt-theme')
    if (theme !== undefined)
      this.$store.commit('updateTheme', {
        theme
      })

    const seo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        theme: this.theme,
        ...seo.htmlAttrs
      },
      meta: [...seo.meta],
      link: seo.link
    }
  },
  data() {
    const socialsRawData = FetchPersonalSocialInformation('net')

    return {
      socials: getSocialObject(socialsRawData),
      version: process.env.version,
      buildDate: process.env.buildDate,
      appendNavbar: false,
      headers: ['general', 'internal'],
      headerObject: {
        general: [
          {
            name: 'net',
            icon: 'home',
            link: '/'
          },
          {
            name: 'prang',
            icon: 'home',
            link: '/prang'
          },
          {
            name: 'cms',
            icon: 'admin',
            link: '/cms/'
          }
        ],
        internal: [
          {
            name: 'doc',
            icon: 'docs',
            link: 'https://docs.kcnt.info'
          },
          {
            name: 'api',
            icon: 'apis',
            link: 'https://apis.kcnt.info/docs'
          }
        ]
      },
      developments: [
        {
          name: 'organization',
          link: 'https://github.com/kcnt-info',
          icon: 'github'
        },
        {
          name: 'github',
          link: 'https://github.com/kcnt-info/website',
          icon: 'github'
        }
      ]
    }
  },
  computed: {
    language() {
      // console.log(this.$i18n)
      // return 'English'
      return this.$i18n.locales.find(v => v.code === this.$i18n.locale).name
    },
    languageCode() {
      return this.$i18n.locale
    },
    themeIcon() {
      if (this.isLight) return '$vuetify.icons.sun'
      if (this.isDark) return '$vuetify.icons.moon'
      return '$vuetify.icons.moon'
    },
    isLight() {
      return this.theme === 'Light'
    },
    isDark() {
      return this.theme === 'Dark'
    },
    ...mapState(['theme'])
  },
  mounted() {
    console.log(this.$vuetify.theme)
    this.updateChatroom()
  },
  methods: {
    updateChatroom() {
      if (this.isLight) window.$crisp.push(['config', 'color:theme', ['black']])
      else window.$crisp.push(['config', 'color:theme', ['blue_grey']])
    },
    getFlag(code) {
      return code === 'en' ? 'us' : code
    },
    transformLink(link) {
      if (/^https?:\/\//.test(link)) return link
      else {
        if (this.$i18n.fallbackLocale.includes(this.$i18n.locale)) return link
        else return `/${this.$i18n.locale}${link}`
      }
    },
    toggleTheme() {
      this.$store.commit('toggleTheme')
      this.$cookies.set('kcnt-theme', this.theme, {
        maxAge: 60 * 60 * 24 * 15 // expires in 15 days
      })

      this.updateChatroom()
    },
    toggleNavbar() {
      this.appendNavbar = !this.appendNavbar
    }
  }
}
</script>

<style lang="scss">
@import '~assets/style/helper.scss';
</style>
