import { Controller } from '@hotwired/stimulus'
import Glider from 'glider-js'
import('glider-js/glider.min.css')

// this is to prevent to expose directly the email address in the HTML
export default class extends Controller {
  static values = { index: { type: Number, default: 0 } }
  static targets = ['slides', 'slide', 'previous', 'next', 'dots']

  connect () {
    if (document.documentElement.hasAttribute('data-turbo-preview')) {
      return
    }

    requestAnimationFrame(() => {
      this.#initializeGlider()
      this.#initializeAutoplay()
    })
  }

  disconnect () {
    if (document.documentElement.hasAttribute('data-turbo-preview')) {
      return
    }

    clearInterval(this.interval)
    this.element.removeEventListener('click', this.resetInterval)
    this.glider.destroy()
    this.element.remove()
  }

  resetInterval () {
    this.stopInterval()
    this.startInterval()
  }

  startInterval () {
    this.interval = setInterval(() => {
      this.nextTarget.click()
    }, 5000)
  }

  stopInterval () {
    clearInterval(this.interval)
  }

  // private

  #initializeGlider () {
    this.glider = new Glider(this.slidesTarget, {
      slidesToShow: 1,
      draggable: true,
      rewind: true,
      scrollLock: true,
      scrollLockDelay: 100,
      dots: this.dotsTarget,
      arrows: {
        prev: this.previousTarget,
        next: this.nextTarget
      }
    })
  }

  #initializeAutoplay () {
    this.interval = setInterval(() => {
      this.nextTarget.click()
    }, 5000)
    this.element.addEventListener('click', this.resetInterval.bind(this))
    this.element.addEventListener('touchstart', this.resetInterval.bind(this))
    this.element.addEventListener('touchend', this.resetInterval.bind(this))
    this.element.addEventListener('dragstart', this.stopInterval.bind(this))
    this.element.addEventListener('dragend', this.startInterval.bind(this))
  }
}
