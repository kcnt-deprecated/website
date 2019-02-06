<template>
  <section class="centralized-container">
    <div>
      <h2>
        Write to Firestore. {{ ip }}
      </h2>
      <v-text-field
        v-model="text"
        label="Add some content"
      />
      <div>
        <button 
          :disabled="saving" 
          @click="writeToFirestore">
          <span v-if="!saving">Save now</span>
          <span v-else>Saving...</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import crypto from 'crypto'
import { queryIP } from '@/assets/apis/ip.js'

export default {
  data() {
    return {
      buildDate: process.env.buildDate,
      text: '',
      saving: false,
      id: '',
      ip: ''
    }
  },

  async asyncData(ctx) {
    const query = ctx.query
    const fireDb = ctx.app.$fireDb
    const ip = await queryIP(ctx.app.$axios)

    if (query.id) {
      const id = query.id
      const ref = fireDb.ref(`query/${process.env.buildDate}/${id}`)

      try {
        const res = await ref.once('value')
        if (res.val() && res.val().text) {
          return {
            text: res.val().text,
            id: query.id,
            ip,
            url: 'http://192.168.1.105:3000'
          }
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
  methods: {
    async writeToFirestore() {
      this.saving = true

      const date = +new Date()
      const _id = date - this.buildDate
      const postID = `${crypto.randomBytes(2).toString('hex')}`
      const id = `KC${_id}p${postID}`.toUpperCase()
      const ref = this.$fireDb.ref(`query/${this.buildDate}/${id}`)

      try {
        await ref.set({
          text: this.text,
          timestamp: date
        })
      } catch (e) {
        console.error(e)
      }

      try {
        const url =
          'https://hooks.slack.com/services/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'

        await this.$axios.$post(
          url,
          JSON.stringify({
            attachments: [
              {
                fallback: 'someone query something in KcNt website',
                color: '#36a64f',
                pretext: `${this.ip.ip} have query something`,
                title: 'Website link',
                title_link: `${this.url}${this.$route.fullPath}`,
                text: this.text,
                footer: 'KcNt bot',
                ts: date
              }
            ]
          }),
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*',
              post: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
              }
            },
            withCredentials: false,
            transformRequest: [
              (data, headers) => {
                console.log('data-in-transform', data)
                console.log('headers-in-transform', headers)
                return data
              }
            ]
          }
        )

        this.id = id
        this.$router.replace({ query: { id: this.id } })
      } catch (error) {
        console.error(error)
      }
      this.saving = false
    }
  }
}
</script>
