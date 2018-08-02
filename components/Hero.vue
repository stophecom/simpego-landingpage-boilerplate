<template>
    <section class="hero">
        <img class="hero__background" :src="backgroundImage" />
        <div class="hero__content">
          <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: '/images/background-drones.jpg'
    }
  }
}
</script>

<style lang="scss">
.hero {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - #{$header-height});
    position: relative;

    .hero__background {
        left: 0;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
    }

    &::after {
        background-color: rgba(0, 0, 0, 0.2);
        content: '';
        left: 0;
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .hero__content {
      color: white;
      position: relative;
      max-width: 90%;
      z-index: 1;
    }
}
</style>
