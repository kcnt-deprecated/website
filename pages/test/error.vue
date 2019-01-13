<template>
  <div>
    <button @click="error">Send error</button>
  </div>
</template>

<script>
export default {
  methods: {
    error() {
      this.$sentry.captureMessage('Have someone click send error button')
    }
  }
}
</script>
