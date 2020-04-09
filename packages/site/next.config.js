const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown',
        raw: false,
        options: {
          remark: ['remark-emoji'],
          rehype: ['@mapbox/rehype-prism']
        }
      },
      {
        name: '@geut/nextein-plugin-title-chicago-style',
        options: {
          special: ['GEUT', 'SDK', 'p2pcommons']
        }
      }
    ]
  },
  exportPathMap: () => ({
    '/blog': { page: '/blog' }
  })
})
