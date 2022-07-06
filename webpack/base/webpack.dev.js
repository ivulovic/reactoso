const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseCommonConfiguration = require('./webpack.common');

const baseDevelopmentConfiguration = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.tsx'],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  devServer: {
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000',
    //   }
    // }
  }
};

module.exports = merge(baseCommonConfiguration, baseDevelopmentConfiguration);