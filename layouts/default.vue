<template>
  <div>
    <div class="center w-80">
      <header class="tc pa3">
        <div class="flex items-center justify-between">
          <nuxt-link :to="'/'">
            <h2>Indigo</h2>
          </nuxt-link>
          <div v-if="currentUser">
            Last visited:
            <nuxt-link :to="`/person/${currentUser.id}`">{{
              currentUser.name
            }}</nuxt-link>
          </div>
        </div>
      </header>
      <div class="main">
        <Nuxt />
      </div>
      <div class="pv6">
        <footer>footer</footer>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['currentUser']),
}
</script>
