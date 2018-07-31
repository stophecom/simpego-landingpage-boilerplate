<template>
  <div>
    <Header />
    <main class="main" role="main">
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

html {
  font-family: $family-sans-serif;
}

*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

.main {
  margin-top: $navbar-height;
}

</style>
