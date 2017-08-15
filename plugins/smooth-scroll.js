import Vue from 'vue'

Vue.directive('smooth-scroll', {
  bind (el) {
    let elementHref = el.getAttribute('href')

    el.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector(elementHref).scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
})
