var webpack = require("webpack");
var path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, './src/styles/')
      }
    },
  },
};
