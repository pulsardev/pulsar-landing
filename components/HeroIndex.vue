<template>
  <section id="pulsar" class="hero is-dark is-fullheight has-text-centered" style="background-color: black">
    <div class="hero-body">
      <img class="c-hero-image"
           :src="require('@/assets/images/pulsar-bg-1920w.jpg')"
           :srcset="require('@/assets/images/pulsar-bg-1280w.jpg') + ' 1280w, ' + require('@/assets/images/pulsar-bg-1920w.jpg') + ' 1920w'"
           alt="Pulsar">

      <canvas id="space" class="space"></canvas>

      <div class="container">
        <h1 class="title is-uppercase">
          Pulsar
        </h1>
        <h2 class="subtitle">
          We make modern web applications and websites.
        </h2>
        <p class="field">
          <a href="#about" class="button is-large is-light is-outlined" aria-label="View more" v-smooth-scroll>
            <span class="icon is-medium"><i class="fa fa-angle-down"></i></span>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  let canvas
  let c

  let numStars = 1024
  let radius = '100'
  let focalLength
  let centerX, centerY

  let stars = []
  let star
  let i

  let animate = true

  export default {
    name: 'hero-index',
    mounted () {
      if (process.browser) {
        canvas = document.getElementById('space')
        c = canvas.getContext('2d')
        focalLength = canvas.width * 2

        window.requestAnimFrame = (function () { return window.requestAnimationFrame })()

        this.initializeStars()

        this.executeFrame()
      }
    },
    methods: {
      executeFrame () {
        if (animate) {
          window.requestAnimFrame(this.executeFrame)
        }
        this.moveStars()
        this.drawStars()
      },

      initializeStars () {
        centerX = canvas.width / 2
        centerY = canvas.height / 2

        stars = []
        for (i = 0; i < numStars; i++) {
          star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
          }
          stars.push(star)
        }
      },

      moveStars () {
        for (i = 0; i < numStars; i++) {
          star = stars[i]
          star.z--

          if (star.z <= 0) {
            star.z = canvas.width
          }
        }
      },

      drawStars () {
        let pixelX, pixelY, pixelRadius

        // Resize to the screen
        if (canvas.width !== window.innerWidth || canvas.width !== window.innerWidth) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          this.initializeStars()
        }

        c.fillStyle = 'rgba(0,0,0,1)' // rgba(0,10,20,1)

        c.fillRect(0, 0, canvas.width, canvas.height)

        c.fillStyle = 'rgba(209, 255, 255, ' + radius + ')'
        for (i = 0; i < numStars; i++) {
          star = stars[i]

          pixelX = (star.x - centerX) * (focalLength / star.z)
          pixelX += centerX
          pixelY = (star.y - centerY) * (focalLength / star.z)
          pixelY += centerY
          pixelRadius = (focalLength / star.z)

          c.beginPath()
          c.arc(pixelX, pixelY, pixelRadius / 2, 0, 2 * Math.PI)
          c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')'
          c.fill()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    overflow: hidden;
  }

  .title {
    font-size: 6rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 4rem;
    margin-left: 4rem;
  }

  .button {
    border-radius: 50%;
  }

  .space {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    mix-blend-mode: screen;
  }

  .c-hero-image {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: top center;
    opacity: 0.5
  }
</style>
