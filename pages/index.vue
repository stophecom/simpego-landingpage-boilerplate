<template>
<div class="index">
  <section class="section">
    <div class="container">
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        PWA Vue.js Application
      </h2>
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green" rel="noopener">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey" rel="noopener">GitHub</a>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style lang="scss">
  .title {
    // color: $primary;
  }

</style>
