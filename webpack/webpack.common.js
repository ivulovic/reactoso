const path = require("path");

const config = {
  resolve: {
    alias: {
      "@reactoso-ui": path.resolve("src/packages/ui"),
      "pages": path.resolve("src/pages"),
    }
  },
};

module.exports = config;