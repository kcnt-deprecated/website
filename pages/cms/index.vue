<i18n>
{
  "en": {
    "_name": "English",
    "hello": "Hello 👋, What is your name?",
    "byebye": "I think you come to wrong pages, bye bye :)",
    "name":{
      "net": "Net",
      "prang": "Prang",
      "other": "Other..."
    }
  },
  "th": {
    "_name": "ไทย",
    "hello": "สวัสดี, เธอชื่ออะไรอะ?",
    "byebye": "เราคิดว่าเธอมาผิดหน้านะ :)",
    "name":{
      "net": "เน็ต",
      "prang": "ปรางค์",
      "other": "อื่นๆ"
    }
  }
}
</i18n>

<template>
  <div class="centralized-container">
    <header>
      <h2 class="display-3">{{ $t('hello') }}</h2>
    </header>
    <section class="mt-3">
      <v-btn 
        nuxt 
        to="/cms/prang/" 
        outline 
        large
        color="favprang">{{ $t('name.prang') }}</v-btn>
      <v-btn 
        nuxt 
        to="/cms/net/" 
        outline 
        large
        color="favnet">{{ $t('name.net') }}</v-btn>
      <v-btn 
        outline 
        large
        color="accent" 
        @click="goodbye">{{ $t('name.other') }}</v-btn>
    </section>
    <div class="mt-3">
      <footer v-if="bye">
        <p class="subheading">{{ $t('byebye') }}</p>
      </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default: 'en'
    }
  },
  data: function() {
    return {
      bye: false
    }
  },
  methods: {
    goodbye() {
      this.bye = true
      setTimeout(() => {
        this.$router.replace('/')
      }, 2000)
    }
  }
}
</script>
