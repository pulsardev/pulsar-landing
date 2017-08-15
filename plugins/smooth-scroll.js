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
        window.scroll({top: elementAbsolutePosition.top, left: 0, behavior: 'smooth'})
      })
    }
  }
})
