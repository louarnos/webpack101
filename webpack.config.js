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
	module: {
		rules: [
			{ test: /\.css$/, loaders: 'style-loader!css-loader' }
		]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		title: 'Poopy Title',
		minify: { collapseWhitespace: true },
		hash: true,
		template: `${srcDir}/index.ejs`, // Load a custom template (ejs by default see the FAQ for details)
	  })
	]
}
