<template>
  <div>
    <div class="navbar-brand navbar">
      <!-- <nuxt-link
        class="navbar-item" 
        to="/">
        <img 
          src="resources/images/icon/0.5x/primary-round-icon@0.5x.png" 
          width="45" 
          height="45">
      </nuxt-link>
      <a 
        role="button" 
        class="navbar-burger burger" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>-->
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link
                v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="button is-info"
              >{{ locale.name }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="container">
      <div>
        <h1 class="title">{{ $t('name.first') }} {{ $t('name.last') }}</h1>
        <h2 class="subtitle">{{ $t('static.web') }}</h2>
        <h5 class="caption">{{ $t('static.wip') }}</h5>
        <div class="links">
          <nuxt-link 
            to="/" 
            class="button is-outlined is-primary is-large">
            {{
              $t('link.website')
            }}
          </nuxt-link>
          <a 
            href="https://docs.kcnt.info" 
            class="button is-outlined is-info is-large"
          >{{ $t('link.docs') }}</a>
          <a 
            href="cms/" 
            class="button is-outlined is-secondary is-large">
            {{
              $t('link.admin')
            }}
          </a>
          <a
            href="https:github.com/kamontat"
            class="button is-outlined is-link is-large"
          >{{ $t('link.github') }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import 'assets/css/variable.scss';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 6px;
  background-color: $primary;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  min-height: 94vh;
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

.lang-changes {
  display: inline-block;
  margin-top: 0px;
  margin-right: 4px;
  color: #a0f0ed;

  &:hover {
    color: white;
  }
}

.caption {
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;
}
</style>
