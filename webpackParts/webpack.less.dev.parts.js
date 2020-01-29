exports.loadLess = ({
  include, exclude
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        include,
        exclude,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
});