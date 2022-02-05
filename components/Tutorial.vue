<!-- Please remove this file from your project -->
<template>
  <div class="pa4">
    <h2 class="f1 ttl">Indigo</h2>
    <ul>
      <li
        v-for="(user, index) in users"
        :key="user.id"
        :class="[index === 0 ? 'mb2' : 'mv2']"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$axios.get('users').then(({ data }) => {
        console.log('data')
        this.users = data
      })
    },
  },
}
</script>
