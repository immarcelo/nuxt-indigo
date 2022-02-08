export const state = () => ({
  users: [{ id: 0, login: 'carl' }],
  currentUser: null,
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser
  },
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
    await dispatch('department/getCategories')
  },

  /*  async LOAD_USER({ commit }, id) {
    const response = await this.$axios.$get(`users/${id}`)
    commit('SET_CURRENT_USER', response)
  }, */
}
