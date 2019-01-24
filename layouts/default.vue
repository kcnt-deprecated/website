<template>
  <v-app 
    :class="$i18n.locale"
    :dark="isDark">

    <v-navigation-drawer
      v-model="appendNavbar"
      style="display: flex; flex-direction: column;"
      right
      temporary
      fixed
      app>
      <v-list 
        v-for="list in sidebar"
        :key="list.header"
        dense
        subheader
        two-line>

        <v-divider/>
        <v-subheader>{{ $t('sidebar.header.'+list.header+'.'+'text') }}</v-subheader>

        <div 
          v-for="tile in list.values" 
          :key="tile.name || tile.key || tile.icon">
          <v-list-group 
            v-if="tile.values" 
            no-action>

            <v-list-tile slot="activator">
              <v-list-tile-action v-if="tile.icon">
                <v-icon 
                  :color="tile.color" 
                  v-text="$vuetify.icons[tile.icon]"/> 
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t('sidebar.header.'+list.header+'.'+tile.key) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="value in tile.values"
              :key="'cop-'+(value.name || value.key || value.icon)"
              :href="value.link">
              <v-list-tile-content>
                <v-list-tile-title>{{ value.name || $t('sidebar.'+list.header+'.'+tile.key+'.'+value.key) }}</v-list-tile-title>
                <v-list-tile-subtitle v-if="value.key">{{ $t('sidebar.'+list.header+'.'+tile.key+'.'+value.key+'Description') }}</v-list-tile-subtitle>
              </v-list-tile-content>
              <v-list-tile-action v-if="value.icon">
                <v-icon 
                  :color="value.color" 
                  v-text="$vuetify.icons[value.icon]"/>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-tile
            v-else 
            :href="tile.internalLink ? undefined : tile.link"
            :to="tile.internalLink ? tile.link : undefined"
            :nuxt="tile.internalLink"
            :target="tile.internalLink ? '': '_blank'">
            <v-list-tile-action>
              <v-icon
                :color="tile.color" 
                v-text="$vuetify.icons[tile.icon]"/> 
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ tile.name || $t('sidebar.'+list.header+'.'+tile.key) }}</v-list-tile-title>
              <v-list-tile-subtitle v-if="tile.key">{{ $t('sidebar.'+list.header+'.'+tile.key+'Description') }}</v-list-tile-subtitle>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>

      <v-spacer/>
      <v-divider/>

      <v-list
        dense
        subheader
      >
        <v-subheader>{{ $t('sidebar.header.setting.text') }}</v-subheader>

        <v-list-tile @click="toggleTheme()">

          <v-list-tile-action>
            <v-icon v-text="themeIcon"/>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ $t('sidebar.header.theme.text') }}</v-list-tile-title>
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
              <v-list-tile-title>{{ $t('sidebar.header.language.text') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="locale in $i18n.locales"
            :key="locale.name"
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
      fixed> <!-- inverted-scroll -->
      <v-toolbar-title @click="backToHome()">
        KC
      </v-toolbar-title>

      <v-spacer/>
      <v-toolbar-items v-show="isNeedScrollToTop">
        <v-btn 
          icon
          @click="$vuetify.goTo('#search', options)">
          <v-icon 
            v-text="$vuetify.icons.search"/>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-toolbar-side-icon @click="toggleNavbar()"/>
      </v-toolbar-items>
    </v-toolbar>

    <v-container class="is-paddingless" >
      <nuxt/>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import { FetchPersonalSocialInformation } from '@/assets/apis/models/resources.js'
import { getSocialObject } from '@/assets/apis/models/social.js'

import { ScrollConstants } from '@/assets/apis/scrolling'

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

    /* 
    sidebar schema: 
    [
      {
        header: String,
        values: [
          {
            name: String, // **optional** Title or name of the list
            icon: String, // **optional** icon key
            key: String, // **optional** key for json in translate object
            link: String // **optional** IF NO 'VALUES'
            action: Function // **optional** IF NO 'VALUES'
            values: [
              {
                name: String, // Title or name of the list
                icon: String, // **optional** icon key
                key: String, // **optional** key for json in translate object
                link: String // **optional** MUST EXIST IF NO 'VALUES'
              }
            ] // **optional** collapse list
          }
        ]
      }
    ]
    */

    return {
      options: ScrollConstants.option,
      version: process.env.version,
      buildDate: process.env.buildDate,
      appendNavbar: false,
      sidebar: [
        {
          header: 'general',
          values: [
            {
              icon: 'home',
              key: 'net',
              link: '/net',
              internalLink: true
            },
            {
              icon: 'home',
              key: 'prang',
              link: '/prang',
              internalLink: true
            },
            {
              icon: 'admin',
              key: 'cms',
              link: '/cms/',
              internalLink: true
            }
          ]
        },
        {
          header: 'internal',
          values: [
            {
              icon: 'docs',
              key: 'doc',
              link: 'https://docs.kcnt.info'
            },
            {
              icon: 'apis',
              key: 'api',
              link: 'https://apis.kcnt.info/docs'
            }
          ]
        },
        {
          header: 'external',
          values: [
            {
              icon: 'github',
              key: 'github',
              values: [
                {
                  key: 'organization',
                  icon: 'organization',
                  link: 'https://github.com/kcnt-info'
                },
                {
                  key: 'repo',
                  icon: 'repo',
                  link: 'https://github.com/kcnt-info/website'
                }
              ]
            },
            {
              icon: 'social',
              key: 'social',
              values: getSocialObject(socialsRawData)
            }
          ]
        }
      ]
    }
  },
  computed: {
    isNeedScrollToTop() {
      if (this.scrollTopPercent === undefined) return false
      return this.scrollTopPercent < 0.1
    },
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
    ...mapState(['theme', 'scrollTopPercent'])
  },
  mounted() {
    // console.log(this.$vuetify.theme)
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
    },
    backToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '~assets/style/helper.scss';
</style>
