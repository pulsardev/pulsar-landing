import Vue from 'vue'

require('smoothscroll-polyfill').polyfill()

Vue.directive('smooth-scroll', {
  bind (el) {
    let elementHref = el.getAttribute('href')
    let targetElement = document.querySelector(elementHref)

    if (targetElement) {
      el.addEventListener('click', (e) => {
        e.preventDefault()
        let elementAbsolutePosition = targetElement.getBoundingClientRect()
        // TODO: pass the offset (the navbar height, 52 here) as an argument
        window.scrollBy({top: elementAbsolutePosition.top - 52, left: 0, behavior: 'smooth'})
      })
    }
  }
})
