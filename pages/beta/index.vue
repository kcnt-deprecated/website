<i18n>
{
  "en": {
    "placeholder": "What do you want to know about me ?",
    "startMessage": "Start with a sentences, or question."
  },
  "th": {
    "placeholder": "คุณต้องการจะรู้อะไรเกี่ยวกับผม ?",
    "startMessage": "เริมด้วยการเขียนประโยค"
  }
}
</i18n>

<template>
  <div class="container">
    <div class="center-container">
      <div class="child-container">
        <div class="image-container has-margin-bottom-3">
          <figure 
            class="image" 
            style="max-width: 200px;">
            <img 
              :src="dataLocale.picture" 
              class="is-rounded is-full-height">
          </figure>
        </div>
        <h1 class="is-size-2">{{ dataLocale.name.firstName }} {{ dataLocale.name.lastName }} ({{ dataLocale.nickname }})</h1>
        <h4 
          v-if="dataLocale.myself" 
          class="is-size-5">{{ dataLocale.myself }}</h4>

        <section>
          <b-field 
            :key="'user-input'"
            :message="nlpMessage"
            :type="state === 'unknown' ? 'is-info': (state === 'understand' ? 'is-success' : 'is-danger')"
            position="is-centered"
            class="has-margin-top-3">
            <b-input 
              :key="'user-input'"
              v-model="sentenceBuilder"
              :placeholder="$t('placeholder')"
              icon-pack="fas"
              icon="search"
              rounded
              expanded
              @keyup.enter.native="askQuestion(sentenceBuilder)"/>
          </b-field>
        </section>
      </div>
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

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 94vh;
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
