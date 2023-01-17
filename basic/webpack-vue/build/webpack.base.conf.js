
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
        type: 'asset/resource', 
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
  ],

  externals: {
    'vue': 'window.Vue'
  }
}
