import { Controller } from '@hotwired/stimulus'
import { animate, scroll } from 'motion'

export default class extends Controller {
  static targets = ['header']

  connect () {
    this.headerTargets.forEach((header) => {
      scroll(animate(header, { y: [-400, 400] }), {
        container: this.element,
        target: header
      })
    })
  }
}
