const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  mode: "production",
  entry: {
    bundle: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][fullhash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DoctorCare",
      template: "./index.html",
      filename: "index.html",
      hash: true,
    }),
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./assets/images", to: "./assets/images" },
        { from: "./assets/icons", to: "./assets/icons" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
