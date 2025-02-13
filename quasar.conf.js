// Configuration for your app

module.exports = function (ctx) {
  return {
    // app boot (/src/boot)
    boot: [
      'axios',
      'sqlite'
    ],
    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons', // optional, you are not bound to it
      // 'ionicons-v4',
      // 'mdi-v3',
      'fontawesome-v5',
      // 'eva-icons'
    ],


    supportIE: true,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) {
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QScrollArea',
        'QField',
        'QDate',
        'QPopupProxy',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QInput',
        'QVideo',
        'QImg',
        'QExpansionItem',

        'QBadge',
        'QAvatar',
        'QChip',
        'QSeparator',


        'QCarousel',
        'QCarouselControl',
        'QCarouselSlide',

        'QBanner',
        'QSpace',

        'QFab',
        'QFabAction',

        'QPageSticky',
        'QDialog',


        'QTable',
        'QTh',
        'QTr',
        'QTd',

        'QSelect',
        'QTime',


        'QTabs',
        'QTab',
        'QRouteTab',


        'QFooter'

      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'LocalStorage',
        'Notify',
        'Loading',
        'BottomSheet',
        'Dialog'
      ],
      config: {
        notify: {/* Notify defaults */},
        loading: {/* Loading defaults */}
      }

      // iconSet: 'ionicons-v4'
      // lang: 'de' // Quasar language
    },


    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'PrevTev',
        short_name: 'Prev-Tev',
        description: 'PrevTev',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack(cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }framework
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
