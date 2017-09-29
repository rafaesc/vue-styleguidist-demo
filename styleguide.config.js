const loaders = require('vue-webpack-loaders');
/**
 * More info about this styleguide configuration in
 * vue-styleguidist/vue-styleguidist github repository
 */
module.exports = {
  components: 'src/**/example.vue',
  mixins: [
    'src/mixins.js',
  ],
  webpackConfig: {
    module: {
      loaders,
    }
  },
  serverPort: 6062
};