<template>
    <section class="section" :class="{'section--alternative': alternative}">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    alternative: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: calc(3rem + 5vh) $sectionPadding;

  h1, h2 {
    color: #081754;
    margin: 0.5rem auto 2rem;
    max-width: 90%;
    text-align: center;

    @media screen and (min-width: $breakpointSmall) {
      max-width: 500px;
    }
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.2;

      @media screen and (min-width: $breakpointSmall) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.05;

      @media screen and (min-width: $breakpointSmall) {
      font-size: 1.8rem;
    }
  }

  .section__headline {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0.5rem auto 2rem;
    max-width: 90%;
    text-align: center;

    @media screen and (min-width: $breakpointSmall) {
      font-size: 1.2rem;
      max-width: 500px;
    }
  }

  .section__cta {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  &.section--alternative {
    background-color: $alternativeBackground;

    .section__headline {
      color: $text-strong;
    }
  }
}
</style>
