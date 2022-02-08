<template>
  <div class="product">
    <div class="product-display">
      <div class="container">
        <div class="product-left">
          <div>
            <nuxt-link
              :to="`/department/${product.category}`"
              class="product__category-link flex items-center"
            >
              <outline-arrow-narrow-left-icon class="icon" />
              {{ product.category }}
            </nuxt-link>
          </div>
          <div class="product-display__images">
            <div v-for="(image, index) in 3" :key="index">
              <img :src="product.image" alt="" />
            </div>
            <div class="product-details">
              <div class="product-details__item">
                <h1 class="title--default">About this item</h1>
                <p>{{ product.description }}</p>
              </div>
              <div class="product-details__item">
                <Rating :rating="product.rating" />
              </div>
            </div>
          </div>
        </div>
        <div class="product-display__info">
          <div class="product-info">
            <div class="product-display__title">{{ product.title }}</div>
            <div class="product-display__price">${{ product.price }}</div>
          </div>
          <div class="product-quantity">
            <Quantity :quantity="product.quantity" @onQuantity="onQuantity" />
          </div>
          <AddToCart :product-in-cart="dataInCart" :product="product" />
        </div>
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AddToCart from '~/components/shared/AddToCart.vue'
import Quantity from '~/components/shared/Quantity.vue'
import Rating from '~/components/shared/Rating.vue'
import isItemInList from '~/utils/isItemInList'
export default {
  components: {
    AddToCart,
    Quantity,
    Rating,
  },
  mixins: [isItemInList],
  data() {
    return {
      dataInCart: {},
    }
  },

  computed: {
    ...mapState({
      product: (state) => state.products.product,
      productsInBag: (state) => state.bag.products,
    }),
  },

  watch: {
    productsInBag: {
      deep: true,
      handler() {
        console.log('bag updted 78')
        this.getIsInCart()
      },
    },
  },
  activated() {
    console.log('>>> activated')
    this.getIsInCart()
  },

  methods: {
    ...mapMutations({
      updateProduct: 'products/set',
    }),
    onQuantity(newQuantity) {
      this.updateProduct({ ...this.product, quantity: newQuantity })
    },
    getIsInCart() {
      this.dataInCart = this.isItemInList(this.productsInBag, this.product.id)
      if (this.dataInCart) {
        this.updateProduct({
          ...this.product,
          quantity: this.dataInCart.quantity,
        })
      }
    },
  },
}
</script>

<style lang="scss">
.product {
  background: #fff;
  color: $palatinate;
}
.product-display .container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.product-left {
  width: 50%;
  min-height: 100vh;
}
.product-display__images {
  width: 100%;
  padding-top: 4rem;
  > div {
    margin-bottom: 10rem;
  }
}
.product-display__info {
  width: 40%;
  position: sticky;
  top: 6rem;
  padding-top: 4rem;
  padding-left: 1rem;
  text-align: center;
  max-width: 20rem;
  @media (max-width: 767px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-info {
    text-align: left;
    margin-bottom: 1rem;
  }
}

.product-display__title {
  font-size: 1.5rem;
}
.product-display__price {
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
}
.product-details {
  margin: 10rem 0;
  padding-right: 2rem;
}
.product-details__item {
  margin: 5rem auto;
}
.product__category-link {
  font-weight: bold;
  margin-top: 2rem;
  font-size: 1.8rem;
}

.product-quantity {
  margin: 2rem 0;
}
</style>
