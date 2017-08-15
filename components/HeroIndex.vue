<template>
  <section class="hero is-dark is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-uppercase">
          Pulsar
        </h1>
        <h2 class="subtitle">
          We make modern web applications and websites.
        </h2>
        <p class="field">
          <a href="#about" class="button is-large is-light is-outlined" v-smooth-scroll>
            <span class="icon is-medium"><i class="fa fa-angle-double-down"></i></span>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero-index'
  }
</script>

<style lang="scss" scoped>
  .title {
    font-size: 6rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 4rem;
    margin-left: 4rem;
  }

  .hero {
    background: url(/images/pulsar-bg.jpg) no-repeat top center scroll;
    filter: grayscale(1);
  }

  .button {
    border-radius: 50%;
  }
</style>
