const { merge } = require('webpack-merge');
const baseDevelopmentConfiguration = require('./base/webpack.dev');
const localCommonConfiguration = require('./webpack.common');

module.exports = merge(baseDevelopmentConfiguration, localCommonConfiguration);
