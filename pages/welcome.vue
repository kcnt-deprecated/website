<template>
  <div>
    <div> Welcome to my portfolio website.</div>
    <div>
      <img 
        :src="info.picture" 
        width="380">
    </div>
    <div>
      {{ info.name.firstName }} {{ info.name.lastName }} ({{ info.nickname }})
    </div>
    <div>
      Email: <a :href="'mailto:'+info.email">{{ info.email }}</a>
      Tel: <a :href="'tel:'+info.phone">{{ info.phone }}</a>
    </div>
  </div>
</template>

<script>
import { FetchPersonalInformation } from '@/assets/helper/resources.js'

export default {
  data() {
    return { info: FetchPersonalInformation('net') }
  }
}
</script>
