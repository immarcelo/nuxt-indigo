<template>
  <section class="ratings">
    <div class="rating__stars">
      <div
        v-for="(rating, index) in Math.ceil(rating.rate)"
        :key="`on-${index}`"
      >
        <outline-star-icon class="icon" />
      </div>
      <div
        v-for="(ratingOff, index) in Math.floor(5 - rating.rate)"
        :key="`off-${index}`"
      >
        <outline-star-icon class="icon rating__star--off" />
      </div>
    </div>
    <div>
      <p>Based on {{ rating.count }} feedbacks</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    rating: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.ratings {
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    display: block;
  }
}
.rating__stars {
  display: flex;
  gap: 0.5rem;
  font-size: 3rem;
}
.rating__star--off {
  opacity: 0.25;
}
</style>
