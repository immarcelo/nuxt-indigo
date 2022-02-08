export default {
  methods: {
    isItemInList(products, id) {
      let productInCart = null

      productInCart = products.filter((item) => {
        return item.id === id
      })
      if (productInCart.length === 0) {
        return null
      }
      productInCart = productInCart.map((item, index) => {
        return {
          ...item,
          indexInCart: index,
        }
      })

      return productInCart[0]
    },
  },
}
