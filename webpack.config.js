const HtmlWebpackPlugin =  require( 'html-webpack-plugin' );
const {resolve} = require('path');
const distDir = resolve(__dirname,'dist');
const srcDir = resolve(__dirname,'src');

module.exports = {
    entry: `${srcDir}/app.js`,
    output: {
        path: `${distDir}`,
        filename: 'app.bundle.js'
    },
    plugins: [ new HtmlWebpackPlugin() ]
}
