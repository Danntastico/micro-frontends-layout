const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    writeToDisk: true,
  },
  configureWebpack: {
    output: {
      library: 'micro-frontends-layout',
      libraryTarget: 'umd',
      filename: 'micro-frontends-layout.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.externals([
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome',
      '@ianaya89/vue-cli-plugin-tailwind',
      'bootstrap',
      'bootstrap-vue',
      'single-spa-vue',
      'vue',
    ]);
  },
};
