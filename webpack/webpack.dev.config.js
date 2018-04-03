var webpack = require('webpack');
var path = require('path');

module.exports = {
	mode: 'development',
	entry: [
		path.join(__dirname, '../index.js')
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	output: {
		path: '/Users/kyle/labs/react/skill-map',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: '/Users/kyle/labs/react/skill-map',
		historyApiFallback: true
	}
}
