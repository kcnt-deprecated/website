
<template>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"/>
</template>

<script>
export default {
  head() {
    return {
      title: 'Net CMS',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'kamontat portfolio cms'
        }
      ]
    }
  }
}
</script>
