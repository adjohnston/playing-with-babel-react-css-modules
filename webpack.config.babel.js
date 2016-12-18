import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import validate from 'webpack-validator'

const config = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'eval',

  devServer: {
    hot: true,
    noInfo: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      styles: resolve(__dirname, 'src/styles')
    }
  }
}

export default validate(config);
