<template>
  <section class="about">
    <div class="about-content">
      <h1 class="title--default">About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        blanditiis numquam repellat? Esse officia ab quibusdam, debitis, minima
        ipsam repudiandae magni eaque velit autem veritatis voluptatibus ut
        fugiat, non sit.
      </p>
      <p>
        Perferendis aut excepturi explicabo, eius vitae, cum illo! Animi, ab
        molestias mollitia aliquid, iure voluptatum veritatis, voluptatibus eius
        dolorem quisquam exercitationem possimus. Natus doloribus eos, facilis
        labore eaque dignissimos ipsa recusandae libero exercitationem.
        Explicabo vero numquam eum illo placeat maiores, non rem deserunt,
        nesciunt in eveniet omnis.
      </p>
    </div>
    <img src="~/assets/images/1.jpg" />
  </section>
</template>

<script></script>

<style lang="scss">
.about {
  background: #fff;
  color: $palatinate;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.about-content {
  flex: 0 0 14vw;
  padding: 0 2rem 1rem 3rem;
}
</style>
