// @ts-check

const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'bold',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/,
      },
      {
        loader: 'raw-loader',
        test: /\.css$/,
      },
    ],
  },
  plugins: [new CheckerPlugin()],
  externals: [
    'emotion',
    'final-form',
    'history',
    'moment',
    'react',
    'react-dom',
    'react-final-form',
    'react-router',
    'react-router-dom',
    'tslint-react',
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            keep_fnames: true,
          },
          mangle: {
            keep_fnames: true,
          },
        },
      }),
    ],
  },
}

module.exports = config
