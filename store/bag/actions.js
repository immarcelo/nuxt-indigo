export default {
  update({ commit }, { product, inCart }) {
    if (!inCart) {
      return commit('add', product)
    }
    commit('update', { product })
  },
}
