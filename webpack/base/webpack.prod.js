const { merge } = require('webpack-merge');
const baseCommonConfiguration = require('./webpack.common');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseProductionConfiguration = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  plugins: [
    new WebpackBar(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ]
};

module.exports = merge(baseCommonConfiguration, baseProductionConfiguration);