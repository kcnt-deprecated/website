<i18n>
{
  "en": {
    "placeholder": "What do you want to know about me ?",
    "startMessage": "Start with a sentences, or question.",
    "tooltipMessage": "not implement YET!"
  },
  "th": {
    "placeholder": "คุณต้องการจะรู้อะไรเกี่ยวกับผม ?",
    "startMessage": "เริมด้วยการเขียนประโยค",
    "tooltipMessage": "ยังไม่ได้ทำ ใจเย็นๆ"
  }
}
</i18n>

<template>
  <div @keyup.up.native="focusSearch()">
    <div 
      id="search" 
      class="centralized-container has-full-height">
      <div class="child-container">
        <div 
          v-if="debug"
          class="debug">
          <h1>Title: Start debug mode!</h1>
          <ul 
            ref="debugger" 
            class="debug-list">
            <li 
              v-for="(res, i) in response" 
              :key="i">{{ res }}</li>
          </ul>
        </div>
        <div 
          v-view="viewHandler" 
          class="image-container">
          <v-img
            :src="dataLocale.picture"
            width="45%"
            aspect-ratio="1"
            class="round-1 mb-5"
            alt="profile-image"
            @click="toMainPage()"
            @click.ctrl="startDebugMode()"
            @click.meta="startDebugMode()"/>
        </div>
        <h1 class="display-1">{{ dataLocale.name.firstName }} {{ dataLocale.name.lastName }} 
          ({{ dataLocale.nickname }})
        </h1>
        <h4 
          v-if="dataLocale.myself" 
          class="is-size-5">{{ dataLocale.myself }}</h4>

        <section class="mt-3">
          <v-text-field
            ref="search"
            :label="$t('placeholder')"
            :color="currentElementType"
            :error="state === 'confuse'"
            :hint="nlpMessage"
            :error-message="nlpMessage"
            :success="state === 'understand'"
            :success-message="nlpMessage"
            v-model="sentenceBuilder"
            append-outer-icon="search"
            single-line
            clearable
            autofocus
            @click:append-outer="askQuestion()"
            @keyup.enter.native="askQuestion()">
            <v-tooltip
              slot="prepend"
              top>
              <v-btn 
                slot="activator"
                icon 
                @click="sentenceBuilder='help'; nlpMessage; askQuestion()"> 
                <v-icon >
                  help
                </v-icon>
              </v-btn>
              {{ $t('tooltipMessage') }}
            </v-tooltip>
          </v-text-field>
        </section>
      </div>
    </div>

    <div 
      ref="detail" 
      class="detail">
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import { classifySentenceMessage } from '@/assets/apis/nlp.js'
import { FetchPersonalInformation } from '@/assets/apis/models/resources.js'

import nlp from 'compromise'

import { ScrollConstants } from '@/assets/apis/scrolling'

export default {
  name: 'Net',
  data() {
    return {
      sentenceBuilder: '',
      state: 'unknown', // should be 'unknown', 'understand', or 'confuse',
      debug: false,
      response: [],
      question: {
        nouns: [],
        verbs: [],
        adj: [],
        sentence: ''
      }
    }
  },
  computed: {
    currentElementType() {
      if (this.state === 'unknown') return 'info'
      else if (this.state === 'understand') return 'success'
      else return 'error'
    },
    dataLocale() {
      return this.information[this.$i18n.locale]
    },
    nlpMessage() {
      const docs = nlp(this.sentenceBuilder).normalize({
        whitespace: true,
        // verbs: true,
        case: true,
        numbers: true,
        unicode: true,
        parentheses: true,
        possessives: true,
        honorifics: true
      })

      const sentence = docs.out('normal')

      const nouns = docs
        .nouns()
        .toSingular()
        .out('array')

      const verbs = docs
        .verbs()
        .toPresentTense()
        .toInfinitive()
        .out('array')

      const adj = docs.adjectives().out('array')

      this.addResponse({
        nouns,
        verbs,
        adj,
        sentence
      })

      const classify = classifySentenceMessage(this.question)
      if (classify) {
        this.markAsUnderstand()
        return classify.message
      } else {
        this.markAsUnknown()
        return this.$t('startMessage')
      }
    }
  },
  asyncData() {
    const dataEn = FetchPersonalInformation('net', 'en')
    const dataTh = FetchPersonalInformation('net', 'th')

    nlp.plugin({
      words: { CV: 'Noun' }
    })

    return {
      information: { en: dataEn, th: dataTh }
    }
  },
  methods: {
    focusSearch({ force }) {
      this.$refs.search.focus()
      if (force) this.sentenceBuilder = '' // clean string when search new things
    },
    viewHandler(e) {
      // console.log(e.scrollPercent)
      if (e.percentInView === 1)
        this.focusSearch({ force: e.scrollPercent === 0 })
      this.$store.commit('updateScrollValue', {
        scroll: e
      })
    },
    askQuestion() {
      const classify = classifySentenceMessage(this.question)
      if (classify) {
        this.$router.replace({ path: `/net/${classify.type}` })
        this.markAsUnderstand()

        this.$vuetify.goTo('.detail', ScrollConstants.option)
      } else this.markAsConfuse() // mark confuse only when enter and not understand
    },
    markAsUnderstand() {
      this.state = 'understand'
    },
    markAsUnknown() {
      this.state = 'unknown'
    },
    markAsConfuse() {
      this.state = 'confuse'
    },
    addResponse(res) {
      this.question = res
      this.response.push(this.question)

      const container = this.$refs.debugger
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    },
    startDebugMode() {
      this.debug = !this.debug
      console.log(`set debug mode to: ${this.debug}`)
    },
    toMainPage() {
      this.$router.push({ path: '/net' })
    }
  }
}
</script>

<style lang="scss" scoped>
.avator {
  border-color: black;
}

.child-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  word-wrap: break-word;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.debug {
  height: 20vh;
  max-width: 400px;
  overflow-wrap: break-word;
  font-family: Roboto, sans-serif !important;
}

.debug-list {
  height: 15vh;
  overflow-x: scroll;
  overflow-y: scroll;
}
</style>
