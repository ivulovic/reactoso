const path = require("path");

const config = {
  resolve: {
    alias: {
      "@reactoso-ui": path.resolve("src/packages/ui"),
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
      }
    }
  }
};

module.exports = config;