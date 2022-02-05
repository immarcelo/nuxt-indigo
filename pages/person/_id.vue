<template>
  <div>
    <h1>Person page</h1>
    <h2>fecth</h2>
    {{ currentUser.name }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, route }) {
    await store.dispatch('LOAD_USER', route.params.id)
  },
  computed: mapState(['currentUser']),
}
</script>
