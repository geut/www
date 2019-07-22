const { withNextein } = require('nextein/config')
const withCSS = require('@zeit/next-css')

module.exports = withNextein(withCSS({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown', 
        options: {
          remark: ['remark-emoji'],
          rehype: ['@mapbox/rehype-prism']
        }
      }
    ]
  },
  exportPathMap: () => ({
    '/blog': { page: '/blog' }
  })
}))
