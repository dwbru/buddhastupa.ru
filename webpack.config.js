// const path = require('path');
const webpack = require('webpack');
// import webpack from 'webpack';
// const common = require('./configs/common');
const merge = require('webpack-merge');
// const dev = require('./configs/dev')
const common = function () {
  return {
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
        },
        {
          test: /\.html$/,
          loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
        },
        {
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: '$'
          }]
        },

      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('prod')
      // })
    ]
  }
};

module.exports = function(env) {
  // console.log("end=" + env);
  if (env === 'prod') {
    return merge([common(), {
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })]
    }]);
  }
  if (env === 'dev') {
    return merge([common(), {
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })]
    }]);
  }
};
