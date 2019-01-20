<i18n>
{
  "en": {
    "name": {
      "first": "Kamontat",
      "last": "Chantrachirathumrong"
    },
    "static": {
      "web": "My Portfolio Website",
      "wip": "Working on it"
    }
  },
  "th": {
    "name": {
      "first": "กมนทัต",
      "last": "จันทราจีระธำรงค์"
    },
    "static": {
      "web": "เว็บไซด์เก็บผลงาน",
      "wip": "กำลังทำอยู่~"
    }
  }
}
</i18n>

<template>
  <div class="centralized-container">
    <!-- <h3 class="display-3 font-weight-bold">{{ $t('name.first') }} {{ $t('name.last') }}</h3> -->
    <h2 class="display-3 font-weight-bold">{{ $t('static.web') }}</h2>
    <h5 class="subheading font-weight-light">{{ $t('static.wip') }}</h5>
  </div>
</template>
