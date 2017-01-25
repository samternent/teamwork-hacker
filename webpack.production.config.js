var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
  output: {
    filename: "build.js",
    path: __dirname + "/app",
  },
  resolve: {
      extensions: ['', '.js', '.scss'],
  },
  module: {
      loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
          },
          {
            test: /\.scss$/,
            loader: 'style!css!sass'
          }
        ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
