<template>
  <div class="container">
    <section class="section">
      <h1>Hello world</h1>
    </section>
  </div>
</template>

<script>
import { ImportModel } from '@/assets/apis/models'

export default {
  layout: 'empty',
  asyncData() {
    const result = ImportModel('information', { all: true })
    console.log(result)
  }
}
</script>
