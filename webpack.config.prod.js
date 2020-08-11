const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'tslint-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true
        }
      },
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.prod.json'
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ]
};