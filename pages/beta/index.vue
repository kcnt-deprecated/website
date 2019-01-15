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
  <div class="centralized-container">
    <div class="child-container">
      <div class="image-container">
        <v-img
          :src="dataLocale.picture"
          width="45%"
          aspect-ratio="1"
          class="round-1 mb-5"
          alt="profile-image"/>
      </div>
      <h1 class="is-size-2">{{ dataLocale.name.firstName }} {{ dataLocale.name.lastName }} ({{ dataLocale.nickname }})</h1>
      <h4 
        v-if="dataLocale.myself" 
        class="is-size-5">{{ dataLocale.myself }}</h4>

      <section class="mt-3">
        <v-text-field
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
          @keyup.enter.native="askQuestion(sentenceBuilder)">
          <v-tooltip
            slot="append"
            bottom
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
</template>

<script>
import { FetchPersonalInformation } from '@/assets/helper/resources.js'
import nlp from 'compromise'

export default {
  data() {
    return {
      data: ['help', 'overview', 'question'],
      sentenceBuilder: '',
      state: 'unknown' // should be 'unknown', 'understand', or 'confuse'
    }
  },
  computed: {
    dataList() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.sentenceBuilder.toLowerCase()) >= 0
        )
      })
    },
    currentElementType() {
      if (this.state === 'unknown') return 'info'
      else if (this.state === 'understand') return 'success'
      else return 'error'
    },
    dataLocale() {
      return this.information[this.$i18n.locale]
    },
    nlpMessage() {
      const docs = nlp(this.sentenceBuilder).normalize({ verbs: true })

      const nouns = docs
        .nouns()
        .toSingular()
        .out('array')

      const verbs = docs
        .verbs()
        .toPresentTense()
        .out('array')

      const adj = docs.adjectives().out('array')

      console.log(`nouns: ${nouns}`)
      console.log(`verbs: ${verbs}`)
      console.log(`adj: ${adj}`)

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

    return { information: { en: dataEn, th: dataTh } }
  },
  methods: {
    askQuestion(question) {
      console.log(question)
      this.markAsConfuse() // mark confuse only when enter and not understand
    },
    markAsUnderstand() {
      this.state = 'understand'
    },
    markAsUnknown() {
      this.state = 'unknown'
    },
    markAsConfuse() {
      this.state = 'confuse'
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
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
