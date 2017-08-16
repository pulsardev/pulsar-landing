<template>
  <div>
    <navbar-top></navbar-top>

    <hero-index></hero-index>

    <projects-showcase></projects-showcase>

    <hr>

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
  import ProjectsShowcase from '../components/ProjectsShowcase.vue'

  export default {
    components: {
      ProjectsShowcase,
      Contact,
      HeroIndex,
      NavbarTop,
      Logo
    }
  }
</script>
