const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.extractLess = ({ include, exclude, use = [] }) => {
  const plugin = new MiniCssExtractPlugin({
    filename: "[name].css",
  });

  return {
    module: {
      rules: [
        {
          test: /\.less$/,
          include,
          exclude,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
          ].concat(use),
        }
      ],
    },
    plugins: [plugin],
  };
}