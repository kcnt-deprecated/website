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
  <div class="center-container">
    <header>
      <h1 class="title">{{ $t('hello') }}</h1>
    </header>
    <section class="has-margin-top-3">
      <div class="columns">
        <div class="column">
          <nuxt-link 
            class="button is-outlined prang-button is-large"
            to="/cms/prang/">{{ $t('name.prang') }}</nuxt-link>
        </div>

        <div class="column">
          <nuxt-link 
            class="button is-outlined net-button is-large"
            to="/cms/net/">{{ $t('name.net') }}</nuxt-link>
        </div>
        <div class="column">
          <button 
            class="button is-outlined other-button is-large" 
            @click="goodbye">{{ $t('name.other') }}</button>
        </div>
      </div>
    </section>
    <div class="has-margin-top-3">
      <footer v-if="bye">
        <p>{{ $t('byebye') }}</p>
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
        console.log('redirect to home page')
        this.$router.push('/')
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
#languages {
  list-style: none;
  padding: 0;
  display: flex;
  border-bottom: 1px;
  align-items: center;
  justify-content: center;
  height: 30px;
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

.title {
  font-size: 4.5rem;
}
</style>

<style lang="scss" scoped>
.Light {
  @import '~assets/css/light-theme.scss';
  @import 'index.scss';
}

.Dark {
  @import '~assets/css/dark-theme.scss';
  @import 'index.scss';
}
</style>
