import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - dnello',
    title: 'dnello',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router: {
    middleware: 'auth'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBLJ9hCevfhF4Dw5clFw87SEqCAcwp2nKE",
          authDomain: "trello-clone-dnlab08.firebaseapp.com",
          projectId: "trello-clone-dnlab08",
          storageBucket: "trello-clone-dnlab08.appspot.com",
          messagingSenderId: "332168713211",
          appId: "1:332168713211:web:4fc35877a34495e1acf15e"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
          },
          firestore: true,
          storage: true
        }
      }
    ]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
