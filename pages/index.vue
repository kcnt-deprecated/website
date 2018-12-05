<template>
  <section class="container">
    <div>
      <h1 class="title">Kamontat Chantrachirathumrong</h1>
      <h2 class="subtitle">My Portfolio website</h2>
      <h5 class="caption">Working on it</h5>
      <div class="links">
        <nuxt-link 
          to="/" 
          class="button--green">Website</nuxt-link>
        <a
          href="/cms/" 
          class="button--grey">Admin</a>
        <a 
          href="https://github.com/kamontat" 
          class="button--blue">Github</a>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  @apply min-h-screen;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  line-height: 1;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.caption {
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;
}
</style>
