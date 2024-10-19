const HtmlWebpackPlugin = require("html-webpack-plugin");
const federaionModule = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new federaionModule({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './cartshow': './src/bootstrap.js'
      },
      shared: ['@faker-js/faker']
    }),
  ],
};
