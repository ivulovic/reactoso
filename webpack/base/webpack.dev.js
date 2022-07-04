const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseCommonConfiguration = require('./webpack.common');

const baseDevelopmentConfiguration = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.tsx'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({
      overlay: {
        sockIntegration: 'whm',
      },
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    port: 3000
  }
};

module.exports = merge(baseCommonConfiguration, baseDevelopmentConfiguration);