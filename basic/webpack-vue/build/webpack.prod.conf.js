const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[hash:8].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      minify: true,
      inject: true,
      templateParameters: {
        js: [
          'https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js',
        ]
      }
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
})

