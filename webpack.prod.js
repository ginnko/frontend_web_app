const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const extractLess = require('./webpackParts/webpack.less.prod.parts').extractLess;
const extractCss = require('./webpackParts/webpack.css.prod.parts').extractCss;
const purifyCss = require('./webpackParts/webpack.purifyCss.parts').purifyCss;
const path = require('path');
const glob = require('glob');

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const result = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
}, extractLess({
  use: [{
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  }, {
    loader: "less-loader",
    options: {
      sourceMap: true,
    },
  },
],
}), extractCss({
  use: ["css-loader"],
}),purifyCss({
  paths: glob.sync(`${PATHS.app}/**/*`,  { nodir: true })
}));

module.exports = result;