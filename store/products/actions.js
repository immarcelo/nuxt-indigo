export default {
  async get({ commit }, id) {
    const response = await this.$axios.$get(`products/${id}`)
    const product = {
      ...response,
      quantity: 1,
    }
    commit('set', product)
  },
}
