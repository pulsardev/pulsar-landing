import Vue from 'vue'

require('intersection-observer')

let activeClass = 'c-navbar-item--is-active'
let links = {}

let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    if (observable.intersectionRatio > 0.5) {
      links[observable.target.id].classList.add(activeClass)
    } else {
      links[observable.target.id].classList.remove(activeClass)
    }
  })
}, {
  threshold: [0, 0.5, 1]
})

Vue.directive('scroll-spy', {
  bind (el) {
    let elementHref = el.getAttribute('href')
    let targetElement = document.querySelector(elementHref)

    if (targetElement) {
      links[elementHref.substring(1)] = el
      observer.observe(targetElement)
    }
  }
})
