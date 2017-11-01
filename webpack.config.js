// const path = require('path');
const webpack = require('webpack');
// import webpack from 'webpack';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
    // ,
    // path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('wowjs'),
        loader: 'exports-loader?this.WOW'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
