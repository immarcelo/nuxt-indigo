<template>
  <div class="products-display">
    <div class="products-display__title">
      <h1 class="title--large">we're <span>on sale</span></h1>
    </div>
    <ul class="product-display-list">
      <li v-for="product in products" :key="product.index">
        <nuxt-link :to="`product/${product.id}`" class="product-container">
          <div class="product-image">
            <img :src="product.image" alt="" />
          </div>
          <div class="product-info">
            <div class="product-title">{{ product.title }}</div>
            <div class="product-price">${{ product.price }}</div>
          </div>
        </nuxt-link>
      </li>
      <li class="product-display-list__all">
        <Newsletter />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '~/types/products'
import Newsletter from '~/components/Newsletter.vue'
export default Vue.extend({
  components: {
    Newsletter,
  },
  computed: {
    products(): IProduct {
      return this.$store.state.mock.products.products
    },
  },
})
</script>

<style lang="scss">
.products-display {
  margin: 120px auto;

  @media (min-width: 768px) {
    display: flex;
    padding-left: 5%;
  }
  @media (min-width: 2000px) {
    margin-right: 0;
    margin-left: auto;
    padding-left: calc((100vw - 1800px) / 2);
  }
}
.products-display__title {
  position: relative;
  z-index: 2;

  pointer-events: none;
  @media (min-width: 768px) {
    flex: 0 0 20%;
  }
  h1 {
    @media (min-width: 768px) {
      position: absolute;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  span {
    display: block;
    white-space: nowrap;
  }
}

.product-display-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-grow: 1;
  overflow-x: auto;
  padding-bottom: 2rem;
  li {
    display: block;
    flex: 0 0 80%;
    @media (min-width: 768px) {
      flex: 0 0 40%;
    }
    &.product-display-list__all {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.products-display .product-container {
  padding-bottom: 4rem;
  border: 0;
  border-radius: 0;
  @media (orientation: landscape) {
    height: 100vh;
  }
  &:hover {
    background-color: transparent;
    .product-title {
      opacity: 1;
    }
  }
  .product-title {
    text-align: right;
  }
  .product-info {
    max-width: 65%;
    margin-right: 0;
    margin-left: auto;
    text-align: right;
  }
  .product-price {
    font-size: 2rem;
  }

  .product-image {
    position: relative;
    mix-blend-mode: multiply;
    width: auto;
    flex-grow: 1;
    img {
      position: absolute;
      max-height: 100%;
      max-width: 80%;
    }
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: $lavender;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    opacity: 0;
    transition: transform 0.5s $easeOut, opacity 0.5s $easeOut;
  }

  & > div {
    position: relative;
    z-index: 2;
  }

  &:hover {
    color: $palatinate;
    &::after {
      transform: scaleX(1);
      opacity: 1;
    }
    &::before {
      transform: scaleY(1);
    }
  }
}
</style>
