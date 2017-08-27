<template>
  <div>
    <navbar-top></navbar-top>

    <hero-index></hero-index>

    <projects-showcase></projects-showcase>

    <team></team>

    <contact></contact>

    <footer class="footer" style="background-color: hsl(0, 0%, 8%)">
      <div class="container has-text-grey">
        <div class="content has-text-centered">
          <p>
            <strong class="has-text-grey">Pulsar</strong> is a small group of <a href="#team" v-smooth-scroll>developers</a>.
            Our projects are free to use and made with care.
            <br>
            If you love what we do, please consider <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=38BCHG4HYDWH8" title="Donate">donating</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/pulsardev" title="GitHub">
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
  import Team from '../components/Team.vue'

  export default {
    components: {
      Team,
      ProjectsShowcase,
      Contact,
      HeroIndex,
      NavbarTop,
      Logo
    }
  }
</script>
