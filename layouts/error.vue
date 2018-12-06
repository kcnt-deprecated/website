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

<style>
.fullscreen {
  @apply min-h-screen;
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply mx-auto;

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
