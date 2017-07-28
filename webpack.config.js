const HtmlWebpackPlugin =  require( 'html-webpack-plugin' );
const {resolve} = require('path');
//
const distDir = resolve(__dirname,'dist');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: distDir,
        filename: 'app.bundle.js'
    },
    plugins: [ new HtmlWebpackPlugin() ]
}
