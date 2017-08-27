<template>
  <div>
    <section id="about" class="hero is-medium is-dark" style="background-color: #0a0a0a">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Projects</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </div>
    </section>

    <div class="c-projects__showcase tile">
      <div class="tile is-4 is-vertical">
        <figure class="c-effect-julia image tile">
          <img src="https://raw.githubusercontent.com/pulsardev/netsix/master/screenshot.png" alt="Netsix">
          <figcaption>
            <h2 class="title">Netsix</h2>
            <p class="subtitle">Duke is very bored. When he looks at the sky, he feels to run.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>

        <figure class="c-effect-julia image tile">
          <img src="https://raw.githubusercontent.com/pulsardev/mendelable/master/screenshot.png" alt="Mendelable">
          <figcaption>
            <h2 class="title">Mendelable</h2>
            <p class="subtitle">Duke is very bored. When he looks at the sky, he feels to run.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>

      <div class="tile">
        <figure class="c-effect-julia image tile">
          <img src="https://raw.githubusercontent.com/pulsardev/mendelable/master/screenshot.png" alt="Mendelable">
          <figcaption>
            <h2 class="title">Mendelable</h2>
            <p class="subtitle">Duke is very bored. When he looks at the sky, he feels to run.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'projects-showcase'
  }
</script>

<style lang="scss" scoped>
  .c-projects__showcase {
    background-color: black;
  }

  /*---------------*/
  /***** Julia *****/
  /*---------------*/

  .c-effect-julia {
    position: relative;
    overflow: hidden;
    height: 100%;
    cursor: pointer;

    img {
      object-fit: cover;
      height: 100%;
      transition: opacity 0.5s, transform 0.5s;
    }

    &:hover img {
      opacity: 0.4;
      transform: scale3d(1.1, 1.1, 1);
    }

    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    p {
      display: inline-block;
      margin: 0 0 0.25em;
      padding: 0.4em 1em;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      text-transform: none;
      font-weight: 500;
      transition: opacity 0.35s, transform 0.35s;
      transform: translate3d(-100%, 0, 0);
    }

    &:hover p {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
