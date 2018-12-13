
<template>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"/>
</template>

<script>
export default {
  layout: 'empty',
  head() {
    return {
      title: 'Prang CMS',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'natcha portfolio cms'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#nc-root {
  height: 100vh;
}
</style>
