<i18n>
{
  "en": {
    "name": {
      "first": "Natcha",
      "last": "Triratchatchawan"
    },
    "static": {
      "web": "My Portfolio Website",
      "wip": "Work in process"
    }
  },
  "th": {
    "name": {
      "first": "ณัชชา",
      "last": "ไตรรัตน์ชัชวาลย์"
    },
    "static": {
      "web": "เว็บไซด์สะสมผลงาน",
      "wip": "อยู่ระหว่างดำเนินการ :)"
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
