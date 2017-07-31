const HtmlWebpackPlugin =  require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const {resolve} = require('path');
const distDir = resolve(__dirname,'dist');
const srcDir = resolve(__dirname,'src');

module.exports = {
    entry: `${srcDir}/app.js`,
    output: {
        path: `${distDir}`,
        filename: 'app.bundle.js'
    },
	module: {
		rules: [
			{ 
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
						fallback: 'style-loader', 
						use: ['css-loader', 'sass-loader'],
						publicPath: `${distDir}`,
				}), 
			}
		]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		title: 'Poopy Title',
		minify: { collapseWhitespace: true },
		hash: true,
		template: `${srcDir}/index.ejs`, // Load a custom template (ejs by default see the FAQ for details)
	  }),
	  new ExtractTextPlugin({
		  filename: 'app.css',
		  disable: false,
		  allChunks: true
	  }),
	]
}
