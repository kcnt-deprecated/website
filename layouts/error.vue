<i18n>
{
  "en": {
    "error": {
      "code": "Please remember this code: ",
      "500": {
        "name": "An error occurred",
        "description": "I don't know what is occurred"
      },
      "404": {
        "name": "This page could not be found",
        "description": "Maybe your page is not exist, moved or wrong typing path"
      }
    },
    "page": {
      "home": "Home page",
      "admin": "Admin page"
    }
  },
  "th": {
    "error": {
      "code": "กรุณาจำรหัสนี้เพื่อติดต่อ",
      "500": {
        "name": "เกิดปัญหาที่ไม่รู้จักขึ้น",
        "description": "ไม่รู้จริงๆนะ ว่าเกิดอะไรขึ้น"
      },
      "404": {
        "name": " หน้านี้ไม่มีอยู่จริง",
        "description": "คุณอาจจะมาผิดหน้า หรือไม่ก็พิมพ์ผิด"
      }
    },
    "page": {
      "home": "กลับหน้าหลัก",
      "admin": "ไปหน้าแอดมิน"
    }
  }
}
</i18n>

<template>
  <div class="centralized-container">
    <h5 class="display-1"><span class="error-code">{{ error.statusCode }}</span> {{ $t('error.'+error.statusCode+'.name') }}</h5>
    <h6 class="subheading">{{ $t('error.'+error.statusCode+'.description') }}</h6>
    <div class="mt-4"/>
    <small class="caption">{{ $t('error.code') }}</small> <code>V{{ version }}B{{ build }}D{{ date }}</code>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      version: process.env.version.replace(/[^\d]/g, ''),
      build: process.env.buildDate,
      date: +new Date()
    }
  }
}
</script>

<style scoped>
.error-code {
  color: var(--v-primary-base);
}

.error-code:hover {
  color: var(--v-error-base);
}
</style>
