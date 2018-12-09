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

<style>
#languages {
  @apply list-reset;
  @apply flex;
  @apply border-b;
  @apply items-center;
  @apply justify-center;
  height: 30px;
}

section {
  @apply m-8;
}

.container {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply mx-auto;
  min-height: 94vh;
}

.title {
  font-size: 4.5rem;
}

.name {
  @apply m-6;
}

.button {
  @apply bg-transparent;
  @apply font-semibold;
  @apply py-4;
  @apply px-8;
  @apply border;
  @apply border-2;
  @apply rounded;

  text-decoration: none;
}

.button:hover {
  @apply text-white;
  @apply border-transparent;
}

.net {
  @apply border-red;
  @apply text-red-dark;
}

.net:hover {
  @apply bg-red;
}

.prang {
  @apply border-yellow;
  @apply text-yellow-dark;
}

.prang:hover {
  @apply bg-yellow;
}

.other:hover {
  @apply bg-black;
}

.localeBar {
  color: brown;
}
</style>
