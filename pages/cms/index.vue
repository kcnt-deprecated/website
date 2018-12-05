
<template>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"/>
</template>

<script>
export default {
  head() {
    return {
      title: 'Content management',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      meta: [{ hid: 'description', name: 'description', name: 'portfolio cms' }]
    }
  }
}
</script>
