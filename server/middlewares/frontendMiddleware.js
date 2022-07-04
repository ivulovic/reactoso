/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app) => {
  const webpackConfig = require('../../webpack/webpack.dev');
  const addDevMiddlewares = require('./addDevMiddlewares');
  addDevMiddlewares(app, webpackConfig);
  return app;
};
