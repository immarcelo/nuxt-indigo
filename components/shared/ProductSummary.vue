<template>
  <div>
    <nuxt-link :to="`/product/${product.id}`">
      <div
        class="product-container"
        :style="{ transform: `translateY(${offsetY}px)` }"
      >
        <div class="product-image">
          <img :src="product.image" alt="" />
        </div>
        <div class="product-info">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">${{ product.price }}</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    product: {
      type: Object,
    },
  },
  data() {
    return {
      offsetY: 0,
    }
  },
}
</script>

<style lang="scss">
.product-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem 2rem 1.5rem;
  transition: background-color 0.25s;
  border-bottom: 1px solid;
  display: block;
  &:hover {
    background-color: $lavender;
    color: #fff;

    .product-title {
      opacity: 0.25;
    }
  }
}

.product-title {
  text-transform: lowercase;
  font-weight: 300;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  line-height: 1.5;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-height: 3em;

  transition: opacity 0.25s;
}
.product-info {
  margin-top: 1rem;
  text-align: right;
}
.product-price {
  font-size: 1.2rem;
  margin-top: 0.25rem;
  letter-spacing: 0.1em;
}

.product-image {
  mix-blend-mode: multiply;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  img {
    max-height: 80%;
  }
}
</style>
