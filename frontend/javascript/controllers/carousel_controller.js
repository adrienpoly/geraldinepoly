import { Controller } from '@hotwired/stimulus'
import Glider from 'glider-js'
import('glider-js/glider.min.css')

// this is to prevent to expose directly the email address in the HTML
export default class extends Controller {
  static values = { index: { type: Number, default: 0 } }
  static targets = ['slides', 'slide', 'previous', 'next', 'dots']

  connect () {
    this.#initializeGlider()
    this.#initializeAutoplay()
  }

  disconnect () {
    clearInterval(this.interval)
    this.element.removeEventListener('click', this.resetInterval)
  }

  resetInterval () {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.nextTarget.click()
    }, 5000)
  }

  // private

  #initializeGlider () {
    this.glider = new Glider(this.slidesTarget, {
      slidesToShow: 1,
      draggable: true,
      rewind: true,
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
  }
}
