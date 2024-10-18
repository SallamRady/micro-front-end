const htmlWebpackPlugin = require('html-webpack-plugin');
const federationModule = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new federationModule({
            name: 'container',
            remotes: {
                Products: 'productsList@http://localhost:8081/remoteEntry.js',
                Cart: 'cart@http://localhost:8082/remoteEntry.js',
            }
        })
    ]
}