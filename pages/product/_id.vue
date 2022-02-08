<template>
  <Product />
</template>

<script>
import Product from '~/components/Product.vue'
export default {
  components: {
    Product,
  },

  async fetch({ store, route }) {
    await store.dispatch('products/get', route.params.id)
  },
}
</script>
