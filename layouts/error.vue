<template>
  <section class="fullscreen">
    <h1 v-if="error.statusCode === 404"><span class="error-code">{{ error.statusCode }}</span> Page not found</h1>
    <h1 v-else><span class="error-code">{{ error.statusCode }}</span>An error occurred</h1>
    <div class="mt-3">
      <nuxt-link 
        to="/" 
        class="mr-2 link">Home page</nuxt-link>
      <a 
        href="/cms/" 
        class="link">Admin page</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
.fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  border: 12px solid black;
}

.link {
  text-decoration: none;
  color: black;
}

.link:hover {
  color: green;
}

.error-code {
  color: red;
  font-size: 60px;
}

.error-code:hover {
  color: blue;
}
</style>
