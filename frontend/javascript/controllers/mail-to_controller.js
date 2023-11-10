import { Controller } from '@hotwired/stimulus'

// this is to prevent to expose directly the email address in the HTML
export default class extends Controller {
  static values = { email: String }
  connect () {
  }

  openEmail () {
    const link = document.createElement('a')
    link.href = `mailto:${this.emailValue}`
    link.style.display = 'none'
    this.element.appendChild(link)
    link.click()
    requestAnimationFrame(() => {
      this.element.removeChild(link)
    })
  }
}
