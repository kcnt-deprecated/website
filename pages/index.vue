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
    },
    "link": {
      "website": "Website",
      "admin": "Admin",
      "github": "Github",
      "docs": "Documentation"
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
    },
    "link": {
      "website": "เว็บไซด์",
      "admin": "หน้าแอดมิน",
      "github": "กิตฮับ",
      "docs": "เอกสาร"
    }
  }
}
</i18n>

<template>
  <div class="centralized-container">
    <h3 class="display-2 font-weight-bold">{{ $t('name.first') }} {{ $t('name.last') }}</h3>
    <h5 class="headline">{{ $t('static.web') }}</h5>
    <h6 class="subheading font-weight-light">{{ $t('static.wip') }}</h6>
  </div>
</template>
