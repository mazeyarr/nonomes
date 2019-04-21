import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper'

const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=no', 'scrollbars=no'],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
  ]
}

Vue.use(VueHtmlToPaper, options)
