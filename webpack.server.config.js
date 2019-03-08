const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: { server: './server.js', 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  node: {
    __dirname: false,   
    __filename: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    },
  externals: [nodeExternals()], 
  module: {
    rules: [
        {test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader'},
    ]
  }    
}