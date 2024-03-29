import { Controller } from '@hotwired/stimulus'
export default class extends Controller {
  initialize () {
    this.messageSent = false
  }

  connect () {
    setTimeout(() => {
      this.initializeCrisp()
    }, 1000)
  }

  initializeCrisp () {
    if (window.$crisp) {
      return
    }

    window.$crisp = []
    window.CRISP_WEBSITE_ID = 'fa4a0e7f-2db1-464f-98ce-d0056f168353'
    const d = document
    const s = d.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    d.getElementsByTagName('head')[0].appendChild(s)
    window.$crisp.push(['on', 'message:sent', this.sendEvent.bind(this)])
    window.$crisp.push(['on', 'chat:opened', this.sendChatOpenedEvent.bind(this)])
    window.$crisp.push(['on', 'session:loaded', this.setAsPermanent.bind(this)])
  }

  setAsPermanent () {
    const client = document.querySelector('.crisp-client')
    client.id = 'crisp-client'
    client.setAttribute('data-turbo-permanent', 'true')
  }

  show (e) {
    e.preventDefault()
    window.$crisp.push(['do', 'chat:open'])
    window.$crisp.push(['safe', true])
  }

  // private

  sendEvent () {
    if (!this.messageSent) {
      this.messageSent = true
      window.dataLayer.push({ event: 'message_sent' })
      window.gtag('event', 'message_sent', {
        event_category: 'engagement',
        event_label: 'chat'
      })
    }
  }

  sendChatOpenedEvent () {
    window.dataLayer.push({ event: 'chat_opened' })
    window.gtag('event', 'chat_opened', {
      event_category: 'engagement',
      event_label: 'chat'
    })
  }
}
