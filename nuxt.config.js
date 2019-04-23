require('dotenv').config()

module.exports = {
  mode: 'spa',

  env: {
    env: process.env.APP_ENV,
    baseUrl:
      process.env.APP_ENV !== 'local'
        ? process.env.PROD_API
        : process.env.DEV_API
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
        content: `S.V.A.A. Nomen Non Magnum est (NoNoMes) is een bruisende studentenvereniging met haar sociëteit in hartje Amsterdam. Jaarlijks organiseert NoNoMes de leukste activiteiten! Denk aan de wekelijkse borrel op dinsdag, gala’s op de meest luxe locaties en onze jaarlijkse feestweek de Warmoesweek. NoNoMes heeft vijf dames- en vier herendisputen waarmee je samen eet, borrelt, studeert en misschien wel woont in Amsterdam. Met een lidmaatschap bij NoNoMes haal je alles uit je studentenleven!`
      },
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
    middleware: ['load-store', 'active-page']
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
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-96990724-5'
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
