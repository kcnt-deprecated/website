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
  <div>
    <div 
      id="search" 
      class="centralized-container has-full-height">
      <div class="child-container">
        <div 
          v-if="debug" 
          class="debug">
          <h1>Title: Start debug mode!</h1>
          <ul class="debug-list">
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
            @click="toMainPage()"/>
        </div>
        <h1 class="display-1">{{ dataLocale.name.firstName }} {{ dataLocale.name.lastName }} 
          <span 
            @click="startDebugMode()">({{ dataLocale.nickname }})</span>
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
            prepend-icon="search"
            single-line
            clearable
            autofocus
            @keyup.enter.native="askQuestion()">
            <v-tooltip
              slot="append"
              right
            >
              <v-icon 
                slot="activator">
                help
              </v-icon>
              {{ $t('tooltipMessage') }}
            </v-tooltip>
          </v-text-field>
        </section>
      </div>
    </div>

    <nuxt-child/>
  </div>
</template>

<script>
import { FetchPersonalInformation } from '@/assets/helper/resources.js'
import nlp from 'compromise'

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
        verbs: true,
        case: false,
        numbers: true,
        unicode: true,
        parentheses: true,
        possessives: true,
        honorifics: true
      })

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
        sentence: docs.out('text')
      })

      if (nouns.includes('project')) {
        this.markAsUnderstand()
        return 'do you want to know my project right ?'
      } else {
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
      console.log(e.scrollPercent)

      if (e.percentInView === 1)
        this.focusSearch({ force: e.scrollPercent === 0 })
      this.$store.commit('updateScrollValue', {
        scroll: e
      })
    },
    askQuestion() {
      const q = this.question
      if (q.verbs.includes('help')) {
        this.$router.replace({ path: `/net/help` })
        this.markAsUnderstand()
      } else if (q.adj.includes('overview')) {
        this.$router.replace({ path: `/net/overview` })
        this.markAsUnderstand()
      } else {
        this.markAsConfuse() // mark confuse only when enter and not understand
      }
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
  font-family: Roboto, sans-serif !important;
}

.debug-list {
  height: 15vh;
  overflow-x: scroll;
  overflow-y: scroll;
}
</style>