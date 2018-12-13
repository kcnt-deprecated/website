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
  <div>
    <ul id="languages">
      <li 
        v-for="(obj, key) in $i18n.messages"
        :id="'lang-'+key"
        :key="key" 
        class="ml-3 mr-3">
        <button 
          class="localeBar" 
          @click="changeLang(key)">{{ obj._name }}</button>
      </li>
    </ul>

    <div class="container">
      <header>
        <h1 class="title">{{ $t('hello') }}</h1>
      </header>
      <section>
        <div class="flex">
          <div class="name">
            <nuxt-link 
              class="button prang"
              to="/cms/prang/">{{ $t('name.prang') }}</nuxt-link>
          </div>
          <div class="name">
            <nuxt-link 
              class="button net"
              to="/cms/net/">{{ $t('name.net') }}</nuxt-link>
          </div>
        </div>
        <div class="name">
          <button 
            class="button other" 
            @click="goodbye">{{ $t('name.other') }}</button>
        </div>
      </section>
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
      locale: this.language,
      bye: false
    }
  },
  computed: {
    messages() {
      return Object.keys(this.$i18n.messages)
    }
  },
  methods: {
    changeLang(locale) {
      this.$i18n.locale = locale
    },
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

section {
  margin: 8px;
}

.container {
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

.name {
  margin: 6px;
}

.button {
  background-color: transparent;
  font-weight: 500;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border: 2px solid black;
  border-radius: 0.25rem;
  text-decoration: none;

  &:hover {
    color: white;
    border: 0px;
  }
}

.net {
  border-color: red;
  color: #cc1f1a;

  &:hover {
    background-color: red;
  }
}

.prang {
  border-color: yellow;
  color: #f2d024;
  &:hover {
    background-color: yellow;
  }
}
.other {
  &:hover {
    background-color: black;
  }
}

.localeBar {
  color: brown;
}
</style>
