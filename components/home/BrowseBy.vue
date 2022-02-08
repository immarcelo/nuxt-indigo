<template>
  <section class="browser-by">
    <div class="container">
      <ul class="flex items-center">
        <li>
          <h1 class="title--default">browse by</h1>
        </li>
        <li v-for="(category, index) in categories" :key="index">
          <nuxt-link
            class="flex items-center category-link"
            :to="`/department/${category}`"
          >
            {{ category }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    categories: (state) => state.department.categories,
  }),
}
</script>

<style lang="scss" scoped>
section {
  padding: 10rem 0;
}
h1 {
  font-weight: bold;
}

ul {
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
}
li {
  width: 33%;
  padding: 1rem 0 0 1rem;
}
li a {
  aspect-ratio: 1;
  border-radius: 2px;
  color: #fff;
  background-color: $palatinate;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s;
  &:hover {
    background-color: $lavender;
  }
}
</style>
