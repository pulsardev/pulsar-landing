<template>
  <div class="c-navbar-top" ref="c-navbar-top">
    <div class="container">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
            <h1 class="title is-4 is-uppercase has-text-grey-lighter">Pulsar</h1>
          </a>

          <div class="navbar-burger burger" data-target="c-navbar-top__menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="c-navbar-top__menu" class="navbar-menu">
          <div class="navbar-end">
            <a href="#" class="nav-item has-text-white is-uppercase">About</a>
            <a href="#" class="nav-item has-text-white is-uppercase">Contact</a>

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary is-outlined">
                    <span class="icon"><i class="fa fa-github"></i></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar-top',
    data () {
      return {
        scrolled: false
      }
    },
    methods: {
      handleScroll () {
        const hasBackgroundClass = 'c-navbar-top--has-background'
        let navbarTop = this.$refs['c-navbar-top']

        if (process.browser) {
          if (window.scrollY > 100) {
            navbarTop.classList.add(hasBackgroundClass)
          } else {
            navbarTop.classList.remove(hasBackgroundClass)
          }
        }
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    mounted () {
      this.handleScroll()
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/main";

  .navbar {
    font-family: $family-secondary;

    &.is-transparent {
      background-color: transparent;
    }
  }

  .c-navbar-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: background .25s ease-in-out, padding .25s ease-in-out;
    padding: 1rem 0;
  }

  .c-navbar-top--has-background {
    background-color: $dark;
    padding: 0;
  }
</style>
