const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'index_bundle.js',
		publicPath: '/git-battle/',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: 'file-loader',
			},
		],
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	plugins: [
		new HtmlWebpackPlugin( {
			template: 'app/index.html',
		} ),
		new MiniCssExtractPlugin(),

	],
	devServer: {
		historyApiFallback: true,
	},
};
