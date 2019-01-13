<i18n>
{
  "en": {
    "error": {
      "unknown": "An error occurred",
      "notfound": " This page could not be found"
    },
    "page": {
      "home": "Home page",
      "admin": "Admin page"
    }
  },
  "th": {
    "error": {
      "unknown": "เกิดปัญหาที่ไม่รู้จักขึ้น",
      "notfound": " หน้านี้ไม่มีอยู่จริง"
    },
    "page": {
      "home": "กลับหน้าหลัก",
      "admin": "ไปหน้าแอดมิน"
    }
  }
}
</i18n>

<template>
  <div class="fullscreen border">
    <h1 v-if="error.statusCode === 404"><span class="error-code">{{ error.statusCode }}</span>{{ $t('error.notfound') }}</h1>
    <h1 v-else><span class="error-code">{{ error.statusCode }}</span>{{ $t('error.unknown') }}</h1>
    <div class="mt-3">
      <nuxt-link 
        to="/" 
        class="mr-2">{{ $t('page.home') }}</nuxt-link>
      <a 
        href="/cms/">{{ $t('page.admin') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
