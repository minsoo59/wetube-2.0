const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin({ filename: "css/styles.css" })],
  entry: {
    main: "./src/public/javascripts/main.js",
    videoPlayer: "./src/public/javascripts/videoPlayer.js",
    recorder: "./src/public/javascripts/recorder.js",
  },
  mode: "development",
  watch: true,
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};