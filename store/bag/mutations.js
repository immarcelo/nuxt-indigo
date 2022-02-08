export default {
  add(state, newItems) {
    state.products = [...state.products, newItems]
  },
  update(state, { product }) {
    const itemToUpdate = state.products.find((item) => product.id === item.id)
    Object.assign(itemToUpdate, product)

    // state.products[indexToUpdate] = item
  },
  remove(state, idToRemove) {
    state.products = state.products.filter((item) => {
      return item.id !== idToRemove
    })
  },
  toggle(state, open) {
    state.open = open
  },
}
