<template>
  <section class="home-end">
    <div class="container">
      <div class="home-end__content">
        <h1 class="title--large">we're open</h1>
        <div class="home-end__address-line">
          <div>
            <outline-clock-icon class="icon" /> Monday to Friday - 11AM - 8PM
          </div>
          <div>
            <outline-location-marker-icon class="icon" /> 289 Palm Av / AB
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.home-end {
  background: $palatinate url(~/assets/images/3.jpg) center/cover;
  background-blend-mode: soft-light;
  color: $palatinate;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.home-end__content {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.home-end__address-line {
  text-transform: lowercase;
  letter-spacing: -0.05em;
  font-size: clamp(1rem, 4vw, 2rem);
  font-weight: bold;
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  .icon {
    display: block;
    margin: auto 0.5rem;
    width: 1.5em;
  }
}
</style>
