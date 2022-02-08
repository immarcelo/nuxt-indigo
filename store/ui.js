export const state = () => ({
  menuOpen: false,
})

export const mutations = {
  toggleMenu(state, isOpen) {
    state.menuOpen = isOpen
  },
}
