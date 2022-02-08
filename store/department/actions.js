export default {
  async getProducts({ commit }, category) {
    const response = await this.$axios.$get(`products/category/${category}`)
    commit('setProducts', response)
  },
  async getCategories({ commit }) {
    const response = await this.$axios.$get(`/products/categories`)
    commit('setCategories', response)
  },
}
