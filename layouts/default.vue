<template>
  <div class="app">
    <Menu />
    <Bag />
    <header class="app-header" :class="{ menuOpen }">
      <nuxt-link :to="'/'">
        <h2 class="app-header__title">Indigo</h2>
      </nuxt-link>
      <span class="line"></span>
      <button class="app-header__menu" @click.prevent="toggle(!menuOpen)">
        {{ menuOpen ? 'close' : 'browse' }}
      </button>
    </header>
    <div class="main">
      <Nuxt keep-alive />
    </div>

    <footer class="app-footer">
      <div class="container">footer</div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

import Menu from '~/components/Menu.vue'
import Bag from '~/components/Bag.vue'

export default {
  components: {
    Menu,
    Bag,
  },
  computed: mapState({
    menuOpen: (state) => state.ui.menuOpen,
  }),
  watch: {
    $route() {
      this.toggle(false)
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'ui/toggleMenu',
    }),
  },
}
</script>

<style scoped lang="scss">
footer {
  padding: 8rem 0 3rem 0;
  background: #fff;
  color: $palatinate;
  font-weight: bold;
}
.app-header {
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  z-index: 10;
  transition: color 0.25s 0.25s;
  &.menuOpen {
    color: #fff;
    transition: color 0.25s 0;
  }

  .line {
    display: block;
    width: 100%;
    height: 2px;
    background: currentColor;
  }
}
.app-header__title {
  font-size: clamp(2rem, 6vw, 4rem);
}
.app-header__menu {
  font-weight: bold;
  text-transform: lowercase;
  font-size: clamp(1rem, 3vw, 2rem);
}
</style>
