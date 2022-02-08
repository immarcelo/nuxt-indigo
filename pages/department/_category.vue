<template>
  <div>
    <div class="department">
      <div v-if="products.length > 0" class="department__header">
        <h1 class="title--default">{{ products[0].category }}</h1>
      </div>
      <div class="department__products">
        <ul class="department__products-list">
          <li
            v-for="product in products"
            :key="product.index"
            class="department__item"
          >
            <ProductSummary :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductSummary from '~/components/shared/ProductSummary.vue'

export default {
  components: {
    ProductSummary,
  },
  async fetch({ store, route }) {
    await store.dispatch('department/getProducts', route.params.category)
  },

  computed: mapState({
    products: (state) => state.department.products,
  }),
}
</script>

<style lang="scss">
.department {
  background: #fff;
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: auto;
}
.department__header {
  background: #fff;
  height: 100vh;
  width: 10%;
  position: sticky;
  top: 6rem;
  padding-top: 3rem;
  .title--default {
    transform: rotate(90deg);
    transform-origin: top left;
    margin-left: 1em;
    font-size: 5rem;
    white-space: nowrap;
    font-size: clamp(2rem, 7rem, 8vh);
  }
}

.department__products-list {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
}
.department__item {
  padding: 0.5rem;
  @media (min-width: 768px) {
    padding: 1rem 0 0 1rem;
    flex-basis: 33%;
  }
  @media (min-width: 1400px) {
    padding: 2rem 0 0 2rem;
  }
}

.department__sort {
  text-align: right;
  padding: 2rem 0;
}
</style>
