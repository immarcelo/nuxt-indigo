<template>
  <div class="bag">
    <button class="bag-call" @click.prevent="toggle(true)">
      <outline-shopping-bag-icon class="icon" />
      {{ products.length }}
    </button>
    <transition name="bag">
      <div v-show="open" class="bag-inner" @click.prevent="toggle(false)">
        <div class="bag-content" @click.stop.prevent>
          <div v-if="products.length === 0">
            <div>empty bag</div>
          </div>
          <div v-else>
            <div class="bag-items">
              <div v-for="product in products" :key="product.id">
                <div class="bag-items__line flex justify-between">
                  <div class="bag-items__title">
                    {{ product.title }} <strong>x{{ product.quantity }}</strong>
                  </div>
                  <div class="spacer"></div>
                  <div>${{ product.price }}</div>
                  <button class="bag-items__remove" @click="remove(product.id)">
                    <outline-x-icon class="icon" />
                  </button>
                </div>
              </div>
            </div>
            <div class="bag-footer">
              <div class="bag-totalizers">${{ sumUp(products) }} total</div>
            </div>
          </div>
        </div>
        <button class="bag-close" @click.prevent="toggle(false)">
          <outline-arrow-down-icon class="icon" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      open: (state) => state.bag.open,
      products: (state) => state.bag.products,
    }),
  },
  methods: {
    ...mapMutations({
      toggle: 'bag/toggle',
      remove: 'bag/remove',
    }),
    sumUp(products) {
      let sum = 0
      for (let i = 0; i < products.length; i++) {
        sum += products[i].price * products[i].quantity
      }
      return sum.toFixed(2)
    },
  },
}
</script>

<style lang="scss">
.bag-content {
  transition: all 0.5s 0.25s $easeIn;
}
.bag-close {
  transition: all 0.5s 0.35s $easeIn;
}
.bag-enter-active,
.bag-leave-active {
  transition: opacity 0.25s $easeIn;
}

.bag-enter,
.bag-leave-to {
  opacity: 0;
  transition: all 0.25s 0.15s $easeOut;
  .bag-content,
  .bag-close {
    opacity: 0;
  }
  .bag-content {
    transform: translateY(50%);
    transition: all 0.25s 0s $easeOut;
  }
  .bag-close {
    transform: translateY(75%);
    transition: all 0.25s 0.15s $easeOut;
  }
}

.bag-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  z-index: $zIndex1;
}
.bag-content {
  position: relative;
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  width: 80%;
  max-width: 600px;
  max-height: 70vh;
  overflow-y: scroll;
  padding: 2rem;
}

.bag-close {
  height: 40px;
  margin: 2rem auto;
  .icon {
    width: 2rem;
    height: 2rem;
  }
}

.bag-items__line {
  margin: 1.75rem 0;
  .spacer {
    flex-grow: 1;
    padding: 0 0.25rem;
    border-bottom: 1px dotted;
  }
}
.bag-items__title {
  max-width: 10rem;
}

.bag-items__remove {
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.bag-footer {
  margin-top: 2rem;
}
.bag-totalizers {
  font-size: 1.5rem;
  line-height: 1;
  font-weight: bold;
  text-align: right;
}
.bag-call {
  position: fixed;
  bottom: 2rem;
  right: 5%;
  z-index: 12;
  text-align: right;
  border-radius: 99px;
  background: $palatinate;
  color: #fff;
  font-weight: bold;
  height: 60px;
  padding: 0 2rem;
  .icon {
    width: 2em;
    height: 2em;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
