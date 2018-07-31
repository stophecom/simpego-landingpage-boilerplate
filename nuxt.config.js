module.exports = {
  head: {
    title: 'Simpego',
    titleTemplate: '%s - Simpego',
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Work+Sans:400,600,700'
      }
    ]
  },
  meta: {
    name: 'Simpego',
    description: 'Simpego - Smart Versichert',
    theme_color: '#5cdc8f',
    ogHost: 'https://www.simpego.ch',
    ogImage: { path: '/og-image.png' },
    twitterCard: 'summary',
    twitterSite: '@simpego_schweiz',
    twitterCreator: '@simpego_schweiz',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  manifest: {
    name: 'Simpego',
    short_name: 'Simpego',
    description: 'Simpego - Smart Versichert'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#5cdc8f'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
    ['nuxt-sass-resources-loader', './assets/main.scss']
  ],

  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    extractCSS: true,
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
