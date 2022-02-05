<template>
  <div class="pa4">
    <ul>
      <li
        v-for="(user, index) in users"
        :key="user.id"
        :class="[index === 0 ? 'mb2' : 'mv2']"
      >
        <nuxt-link :to="'/person/' + user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  computed: mapState(['users']),
})
</script>
