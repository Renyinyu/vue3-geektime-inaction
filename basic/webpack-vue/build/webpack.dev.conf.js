const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      minify: false,
      inject: true,
      templateParameters: {
        js: [
          // 'https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js',
          './vue.runtime.global.js',
        ],
      }
    })
  ],
  devServer: {
    compress: true,
    port: 6001,
    hot: true,
    static: {
      directory: path.join(__dirname, '../public'),
    }
  }
})
