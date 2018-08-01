<template>
  <a class="button" :class="buttonColor(color)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },

  methods: {
    buttonColor: (color) => ({
      'button--primary': color === 'primary',
      'button--secondary': color === 'secondary'
    })
  }
}

</script>

<style lang="scss">
.button {
  align-items: center;
  background-clip: padding-box;
  border-radius: $radius;
  box-shadow: none;
  color: #363636;
  cursor: pointer;
  display: inline-flex;
  height: 2.25em;
  justify-content: center;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.2rem;
  padding: calc(0.375em - 1px) 0.75em;
  position: relative;
  user-select: none;
  text-align: center;
  transition: .1s ease-out;
  vertical-align: top;
  white-space: nowrap;
  -webkit-appearance: none;

    @media screen and (min-width: $breakpointSmall) {
      font-size: 1.2rem;
    }

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,.3);
    transform: translateY(-1px);
  }

  &.button--primary {
    background-clip: padding-box;
    background-image: linear-gradient(90deg,#37f267,#0abb72);
    color: #fff;
  }

    &.button--secondary {
    background-color: $secondary;
    color: #fff;
  }
}
</style>
