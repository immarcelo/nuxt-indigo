<template>
  <transition name="menu">
    <div v-if="menuOpen" class="splash-menu">
      <div class="splash-menu__inner">
        <h1 class="splash-menu__title">browse by</h1>
        <ul class="splash-menu__list flex">
          <li v-for="(category, index) in categories" :key="index">
            <nuxt-link
              :to="`/department/${category}`"
              class="splash-menu__item category-link"
              @click.native="toggle(false)"
            >
              {{ category }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState({
    menuOpen: (state) => state.ui.menuOpen,
    categories: (state) => state.department.categories,
  }),
  methods: {
    ...mapMutations({
      toggle: 'ui/toggleMenu',
    }),
  },
}
</script>

<style lang="scss">
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s $easeIn;
}
.menu-enter,
.menu-leave-to {
  transform: translateY(100%);
  transition: all 0.5s $easeOut;
}

.splash-menu {
  display: flex;
  align-items: center;
  padding-top: 5rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: $palatinate;
  color: #fff;
  overflow-y: auto;
  right: 0;
  top: 0;
  z-index: 9;
}

.splash-menu__inner {
  width: 90%;
  text-align: right;
}

.splash-menu__title {
  font-size: 10vw;
  margin: auto;
  line-height: 1;
}
.splash-menu__item {
  margin: 0.5rem;

  &::before {
    content: '.';
  }
}
@media (min-width: 1024px) {
  .splash-menu__list {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
</style>
