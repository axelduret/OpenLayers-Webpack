const webpack = require('webpack');

module.exports = {
  entry: './src/jsmain.js',
  output: {
    path: __dirname,
    filename: './dist/js/bundle.js'
  },
};
