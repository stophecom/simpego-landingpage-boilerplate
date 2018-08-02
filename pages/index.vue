<template>
<div class="index">
  <Hero>
    <h1>Insure your drone now!</h1>
  </Hero>
  <Section>
    <h1>Simpego - smart insurance</h1>
    <div class="section__headline">Switerland's first insurance marketplace. We did the comparison for you. Eliminate risk at the lowest rates.</div>
    <div class="section__cta">
      <Button color="primary">Primary</Button>
    </div>
  </Section>
  <Section alternative>
    <h2>Why Simpego</h2>
    <div class="section__headline">We are the best.</div>
    <div class="section__cta">
      <Button color="secondary">Secondary</Button>
    </div>
  </Section>
  </div>
</template>

<script>
import Button from '../components/Button'
import Hero from '../components/Hero'
import Section from '../components/Section'

export default {
  components: {
    Button,
    Hero,
    Section
  }
}
</script>

<style lang="scss">
.hero {
  h1 {
    font-size: 2em;
    text-align: center;

    @media screen and (min-width: $breakpointSmall) {
      font-size: 3em;
    }
  }
}
</style>
