
<template>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"/>
</template>

<script>
export default {
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
