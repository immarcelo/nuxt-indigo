<template>
  <div class="quantity-selector flex justify-between">
    <button class="quantity-selector__button" @click="update('minus')">
      <outline-minus-icon class="icon" />
    </button>
    <div class="quantity-selector__number">
      <span
        class="quantity-anm"
        :style="{ transitionDuration: `${quantityAnmDuration}ms` }"
        :data-state="quantityState"
        >{{ quantity }}</span
      >
    </div>

    <button class="quantity-selector__button" @click="update('plus')">
      <outline-plus-icon class="icon" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      required: true,
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      quantityState: '',
      quantityAnmDuration: 400,
    }
  },
  methods: {
    update(type) {
      let newQuantity

      if (type === 'plus') {
        this.quantityState = 'up'
        newQuantity = this.quantity + 1
      } else {
        if (this.quantity < 2) {
          return false
        }
        this.quantityState = 'down'
        newQuantity = this.quantity - 1
      }

      setTimeout(() => {
        this.$emit('onQuantity', newQuantity)
        this.quantityState = ''
      }, this.quantityAnmDuration * 1.5)
    },
  },
}
</script>

<style lang="scss">
.quantity-selector__number {
  flex-grow: 1;
  align-self: center;
  font-weight: bold;
  font-size: 2rem;
  overflow: hidden;
}

.quantity-anm {
  display: block;
  transition-property: all;
  transition-timing-function: $easeIn;
}
.quantity-anm[data-state='down'] {
  transform: translateY(100%);
  opacity: 0;
}
.quantity-anm[data-state='up'] {
  transform: translateY(-100%);
  opacity: 0;
}
.quantity-selector {
  border: 1px solid;
  height: 48px;
}
.quantity-selector__button {
  height: 100%;
  width: 25%;
  background: $palatinate;
  color: #fff;
  .icon {
    width: 2rem;
    height: 2rem;
  }
}
.quantity-selector__button:active {
  .icon {
    transform: scale(0.85);
  }
}
</style>
