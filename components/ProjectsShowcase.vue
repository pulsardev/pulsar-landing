<template>
  <section id="about" class="section is-medium">
    <div class="container">
      <h1 class="title">Projects</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Netsix</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Mendelable</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Freatle</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'projects-showcase'
  }
</script>
