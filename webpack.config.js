const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "./src/public/javascripts/";
const BASE_TEXT = "list/";

module.exports = [
  // css, scss config
  {
    plugins: [new MiniCssExtractPlugin({ filename: "css/[name].css" })],
    entry: {
      // resume
      resumeMain: BASE_JS + "resume/main.js",
      dropdown: BASE_JS + "resume/dropdown.js",
      // epic7pan
      epicMain: BASE_JS + "epic7pan/main.js",
      detail: BASE_JS + "epic7pan/listwhite/detail.js",
      overDeta: BASE_JS + "epic7pan/listwhite/overlay/overDeta.js",
      gallery: BASE_JS + "epic7pan/listwhite/gallery.js",
      overGall: BASE_JS + "epic7pan/listwhite/overlay/overGall.js",
      strategy: BASE_JS + "epic7pan/listwhite/strategy.js",
      overStra: BASE_JS + "epic7pan/listwhite/overlay/overStra.js",
      // wetube
      wetubeMain: BASE_JS + "wetube/main.js",
      commentSection: BASE_JS + "wetube/commentSection.js",
      videoPlayer: BASE_JS + "wetube/videoPlayer.js",
      recorder: BASE_JS + "wetube/recorder.js",
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "assets/"),
      publicPath: "../../static/",
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
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: "file-loader",
        },
      ],
    },
  },
  // txt config
  // {
  //   entry: {
  //     // list.txt
  //     slide: "./src/public/list/slide.txt",
  //     upload_list: "./src/public/list/upload_list.txt",
  //     videos: "./src/public/list/videos.txt",
  //     skills_list: "./src/public/list/skills_list.txt",
  //   },
  //   output: {
  //     filename: "list/[name].txt",
  //     path: path.resolve(__dirname, "assets/"),
  //     clean: true,
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|jpg|gif)$/,
  //         use: "file-loader",
  //       },
  //       {
  //         test: /\.txt$/,
  //         use: "raw-loader",
  //       },
  //     ],
  //   },
  // },
];
