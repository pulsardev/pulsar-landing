<template>
  <div>
    <navbar-top></navbar-top>

    <hero-index></hero-index>

    <section id="about" class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>

    <contact></contact>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import NavbarTop from '../components/NavbarTop.vue'
  import HeroIndex from '../components/HeroIndex.vue'
  import Contact from '../components/Contact.vue'

  export default {
    components: {
      Contact,
      HeroIndex,
      NavbarTop,
      Logo
    }
  }
</script>
