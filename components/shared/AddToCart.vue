<template>
  <a href="#" :class="buttonState" @click.prevent="handleClick()">
    <span class="feedback"> added </span>
    <span v-if="buttonState == 'update'"> update </span>
    <span v-else> add to bag</span>
  </a>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  props: {
    productInCart: {
      default: null,
      required: false,
      type: Object,
    },
    product: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      added: false,
      buttonState: 'default',
    }
  },

  watch: {
    $props: {
      handler() {
        console.log('props updated')
        this.update()
      },
      deep: true,
    },
  },

  methods: {
    ...mapActions({
      updateBag: 'bag/update',
    }),
    ...mapMutations({
      openBag: 'bag/toggle',
    }),
    handleClick() {
      if (this.buttonState === 'added') {
        return this.openBag(true)
      }
      this.updateBag({ product: this.product, inCart: this.productInCart })
    },
    update() {
      if (this.productInCart) {
        return this.product.quantity !== this.productInCart.quantity
          ? (this.buttonState = 'update')
          : (this.buttonState = 'added')
      }
      this.buttonState = 'default'
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid;
  border-radius: 99px;
  overflow: hidden;
  padding: 1rem;
  font-size: 2rem;
  text-transform: lowercase;
  font-weight: bold;
  text-decoration: none;
  line-height: 1;
  transition: border 0.25s 0.5s;
  .icon {
    margin-right: 0.5rem;
    width: 3rem;
    height: 3rem;
  }
  &.added .feedback {
    transform: translateY(0);
  }
}
.feedback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $palatinate;
  color: #fff;
  transform: translateY(-100%);
  transition: transform 0.25s $easeOut;
}
</style>
