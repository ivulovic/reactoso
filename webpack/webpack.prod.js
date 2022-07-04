const { merge } = require('webpack-merge');
const baseProductionConfiguration = require('./base/webpack.prod');
const localCommonConfiguration = require('./webpack.common');

module.exports = merge(baseProductionConfiguration, localCommonConfiguration);
