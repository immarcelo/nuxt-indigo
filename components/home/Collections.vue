<template>
  <div class="collection-blocks">
    <section class="container">
      <div class="collection-blocks__item">
        <div>
          <img class="collection-blocks__image" src="~/assets/images/2.jpg" />
        </div>
        <div class="collection-blocks__title">
          <h1 class="title--default">the first collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            impedit error ipsum consequatur deleniti sunt voluptate! Dolorem
            doloremque molestias vero repellendus modi accusantium maiores
            corporis? Expedita obcaecati ipsam nemo dolorum!
          </p>
          <div class="collection-blocks__button"><Button /></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '~/components/shared/Button'
export default {
  components: {
    Button,
  },
}
</script>

<style lang="scss">
.collection-blocks {
  background: $lavender;
  padding: 2rem 0 4rem;
  margin-top: 12rem;
}
.collection-blocks__button {
  margin-top: 2rem;
}

.collection-blocks__item {
  font-size: 1.2rem;
  > div {
    flex: 0 0 50%;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
  }
}
.collection-blocks__image {
  mix-blend-mode: multiply;
  margin-top: -15rem;
}
</style>
