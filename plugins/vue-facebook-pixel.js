import Vue from 'vue'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

if (process.env.APP_ENV === 'local') {
  Vue.use(VueFacebookPixel)
  Vue.analytics.fbq.init('1092897674233639', {
    track: 'PageView'
  })
}
