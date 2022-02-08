<template>
  <div>
    <AboutUs />
    <HighlightedProducts />
    <Collections />
    <BrowseBy />
    <End />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import HighlightedProducts from '~/components/home/HighlightedProducts.vue'
import AboutUs from '~/components/home/AboutUs.vue'
import Collections from '~/components/home/Collections.vue'
import BrowseBy from '~/components/home/BrowseBy.vue'
import End from '~/components/home/End.vue'
export default {
  components: {
    HighlightedProducts,
    AboutUs,
    Collections,
    BrowseBy,
    End,
  },

  computed: {
    product() {
      return this.$store.state.products.productName
    },
  },

  methods: {
    ...mapMutations({
      setProduct: 'products/setProduct',
    }),
    changeName() {
      this.setProduct(this.inputName)
    },
  },
}
</script>
