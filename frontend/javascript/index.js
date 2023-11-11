import 'index.css'
import '@github/details-menu-element'
import * as Turbo from '@hotwired/turbo'
import { Application } from '@hotwired/stimulus'

// Import all JavaScript & CSS files from src/_components
import components from 'bridgetownComponents/**/*.{js,jsx,js.rb,css}'

import controllers from './controllers/**/*.{js,js.rb}'

window.Stimulus = Application.start()
Object.entries(controllers).forEach(([filename, controller]) => {
  if (filename.includes('_controller.') || filename.includes('-controller.')) {
    const identifier = filename
      .replace('./controllers/', '')
      .replace(/[_-]controller\..*$/, '')
      .replace('_', '-')
      .replace('/', '--')

    Stimulus.register(identifier, controller.default)
  }
})

addEventListener('turbo:before-render', (event) => {
  if (document.startViewTransition) {
    const originalRender = event.detail.render
    event.detail.render = (currentElement, newElement) => {
      document.startViewTransition(() =>
        originalRender(currentElement, newElement)
      )
    }
  }
})
