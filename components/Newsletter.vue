<template>
  <form action="." class="newsletter">
    <div class="tc">
      <h1 class="title--default">more?</h1>
      <div>sign up to our mailing list and stay up-to-date with our offers</div>
    </div>
    <div
      class="fields flex items-center"
      :class="{ mouseOver }"
      @mouseleave="mouseOver = false"
    >
      <input type="text" placeholder="your email" />
      <button type="submit" @mouseover="mouseOver = true">sign up</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      mouseOver: false,
    }
  },
}
</script>

<style lang="scss">
.newsletter {
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 1rem;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  .fields {
    position: relative;
    gap: 12px;
    height: 48px;
    border-radius: 99px;
    overflow: hidden;
    border: 1px solid $palatinate;

    &::before {
      content: '';
      display: block;
      background-color: $palatinate;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.35s $easeOut;
    }
    > * {
      z-index: 2;
      position: relative;
    }
    &.mouseOver {
      color: #fff;
      &::before {
        transform: scaleX(1);
        transition: all 0.35s $easeIn;
      }
    }

    input {
      width: 100%;
      padding-right: calc(2rem + 55px);
      background: transparent;
      border: 0;
      transition: color 0.25s 0.15s;
    }
    button {
      position: absolute;
      right: 1.5rem;
      top: 0;
      bottom: 0;
      width: 65px;
      margin: auto;
      white-space: nowrap;
      height: calc(100% - 1.5rem);
      font-weight: bold;
      transition: color 0.25s 0.35s;
    }
  }
}
</style>
