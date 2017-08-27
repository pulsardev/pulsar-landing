<template>
  <div class="c-navbar-top" ref="c-navbar-top">
    <div class="container">
      <nav class="navbar is-transparent has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item" href="#pulsar" v-smooth-scroll v-scroll-spy>
            <h1 class="title is-4 is-uppercase has-text-white">Pulsar</h1>
          </a>

          <div class="navbar-burger burger" data-target="c-navbar-top__menu" ref="c-navbar-top__toggle-button" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="c-navbar-top__menu" ref="c-navbar-top__menu" class="navbar-menu">
          <div class="navbar-end">
            <a href="#about" class="navbar-item has-text-white is-uppercase" v-smooth-scroll v-scroll-spy>Projects</a>
            <a href="#team" class="navbar-item has-text-white is-uppercase" v-smooth-scroll v-scroll-spy>Team</a>
            <a href="#contact" class="navbar-item has-text-white is-uppercase" v-smooth-scroll v-scroll-spy>Contact</a>

            <a class="navbar-item has-text-white" href="https://github.com/pulsardev" target="_blank">
              <span class="icon"><i class="fa fa-github"></i></span>
            </a>
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
        lastKnownScrollPosition: 0,
        ticking: false
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
      },
      toggleMenu () {
        let toggleButton = this.$refs['c-navbar-top__toggle-button']
        let menu = this.$refs['c-navbar-top__menu']

        if (toggleButton.classList.contains('is-active')) {
          toggleButton.classList.remove('is-active')
          menu.classList.remove('is-active')
        } else {
          toggleButton.classList.add('is-active')
          menu.classList.add('is-active')
        }
      },
      throttleScrollHandling () {
        this.lastKnownScrollPosition = window.scrollY
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll()
            this.ticking = false
          })
        }
        this.ticking = true
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.throttleScrollHandling)
      }
    },
    mounted () {
      this.handleScroll()
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.throttleScrollHandling)
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
    background-color: $black;
    padding: 0;
  }

  .c-navbar-item--is-active {
    background: $grey-darker
  }
</style>
