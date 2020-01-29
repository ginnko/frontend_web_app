const PurifyCSSPlugin = require("purgecss-webpack-plugin");

exports.purifyCss = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })],
});