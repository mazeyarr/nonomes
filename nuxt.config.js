require('dotenv').config()
const axios = require('axios')
const API_URL =
  process.env.APP_ENV !== 'local' ? process.env.PROD_API : process.env.DEV_API

const SITE_URL =
  process.env.APP_ENV !== 'local' ? process.env.PROD_URL : process.env.DEV_URL

module.exports = {
  mode: 'spa',

  env: {
    env: process.env.APP_ENV,
    baseUrl: API_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - S.V.A.A. NoNoMes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `S.V.A.A. NoNoMes is een bruisende studentenvereniging met haar sociëteit in hartje Amsterdam, Jaarlijks organiseert NoNoMes de leukste activiteiten!`
      },
      { name: 'og:title', content: 'S.V.A.A. NoNoMes' },
      { name: 'og:site_name', content: 'S.V.A.A. NoNoMes' },
      { name: 'fb:page_id', content: '325649944119553' },
      { name: 'og:email', content: 'info@nonomes.nl' },
      { name: 'og:phone_number', content: '020-6273067' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: `S.V.A.A. NoNoMes is een bruisende studentenvereniging met haar sociëteit in hartje Amsterdam, Jaarlijks organiseert NoNoMes de leukste activiteiten!`
      },
      { name: 'og:locale', content: 'nl_NL' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://nonomes.nl/_nuxt/img/6d9cfcc.png' },
      {
        name: 'og:url',
        content: SITE_URL
      },
      { name: 'robots', content: 'index, follow' },
      { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
      { httpEquiv: 'language', content: 'NL' },
      { name: 'language', content: 'Nederland' },
      { name: 'revisit-after', content: '7 days' },
      {
        name: 'url',
        content: SITE_URL
      },
      {
        name: 'identifier-URL',
        content: SITE_URL
      },
      { name: 'owner', content: 'Mazeyar Rezaei' },
      { name: 'author', content: 'Mazeyar Rezaei' },
      { name: 'reply-to', content: 'mazeyar.rezaei@gmail.com' },
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon-32x32.png'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loader.vue',

  router: {
    middleware: ['load-store', 'active-page', 'seo-redirect']
  },

  /*
  ** Global CSS
  */
  css: ['bootstrap/dist/css/bootstrap.min.css', 'mdbvue/build/css/mdb.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/intersection-observer.js',
    '~/plugins/vue-waypoint.js',
    '~/plugins/vue-html-sanitizer.js',
    '~/plugins/vue-html-to-paper.js',
    '~/plugins/axios.js',
    { src: '~/plugins/hotjar.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-96990724-5'
      }
    ]
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/order'
  },

  sitemap: {
    hostname: SITE_URL,
    gzip: true,
    exclude: ['/order'],
    routes() {
      return axios
        .get(`${API_URL}articles`)
        .then(resp =>
          resp.data.map(article => {
            return {
              title: article.title,
              url: `/over/nonomes/${article.id}/${article.title}`,
              changefreq: 'monthly',
              lastmod: `${article.updated_at}`
            }
          })
        )
        .catch(() => [])
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    https: process.env.APP_ENV !== 'local',
    baseURL:
      process.env.APP_ENV !== 'local'
        ? process.env.PROD_API
        : process.env.DEV_API
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: ['mdbvue']
  }
}
