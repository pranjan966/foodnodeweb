const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin'); 

/** TODO
 *  add the react refresh webpack plugin to avoid the loss of state when src code is saved.
 */

module.exports = {
    mode: 'development',
    devServer: {
        hot: true
    },
    devtool: 'cheap-module-source-map' ,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name' : JSON.stringify({appName: "foodnodeweb", mode: this.mode, devtool: this.devtool})
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
}
