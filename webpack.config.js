const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {	
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		//  publicPath: '/',
		// filename: '[name].js'
	},
	target: 'web',  	
	module: {
		rules: [
	      {test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader'},
	      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
		]
	},	
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',			
		}),
		new CopyWebpackPlugin([
            {from:'src/data',to:'images'} 
        ]),
        new webpack.NoEmitOnErrorsPlugin() 
	]
};
