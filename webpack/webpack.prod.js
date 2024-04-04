const webpack = require("webpack");

module.exports = {
    mode: 'production',
    devtool: 'source-map' ,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name' : JSON.stringify({appName: "foodnodeweb", mode: this.mode, devtool: this.devtool})
        })
    ]
}