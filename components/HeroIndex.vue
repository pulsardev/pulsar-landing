<template>
  <section class="hero is-dark is-fullheight has-text-centered">
    <div class="hero-body">
      <canvas id="space" class="space"></canvas>

      <div class="container">
        <h1 class="title is-uppercase">
          Pul<span class="glitch" data-text="s" ref="glitch">s</span>ar
        </h1>
        <h2 class="subtitle">
          We make modern web applications and websites.
        </h2>
        <p class="field">
          <a href="#about" class="button is-large is-light is-outlined" v-smooth-scroll>
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

  .hero-body:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
  }

  .space {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
  }

  .glitch {
    color: white;
    position: relative;
  }

  @keyframes noise-anim {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      }
    }
  }

  .glitch:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
  }

  @keyframes noise-anim-2 {
    $steps: 20;
    @for $i from 0 through $steps {
      #{percentage($i*(1/$steps))} {
        clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      }
    }
  }

  .glitch:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 1px 0 blue;
    top: 0;
    color: white;
    background: black;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }
</style>
