const { merge } = require('webpack-merge');
const TerserJsPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'js/common',
      minChunks: 2,
    },
    minimizer: [
      new TerserJsPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  devtool: false,
});
