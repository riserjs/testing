const path = require( 'path' )
const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const nodeExternals = require( 'webpack-node-externals' )
const webpackDevServer = require( 'webpack-dev-server' )
const memfs = require( 'memfs' )
const exec = require('child_process').exec

const backend = {
  mode: 'development',
  entry: {
    main: [
			'./node_modules/riser/dist/backend/loader',
			'./node_modules/riser/dist/backend/runtime',
		]
  },
	target: 'node',
	externals: [
		nodeExternals()
	],
	resolve: {
		extensions: [ '.js', '.ts' ],
	},
	module: {
		rules: [ { 
			test: /\.(js|jsx|ts|tsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						[ '@babel/preset-env' ],
						[ '@babel/typescript' ]
					],
					plugins: [
						[ '@babel/plugin-proposal-decorators', { 'legacy': true } ]
					]
				}
			}
		} ]
	},
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
  ],
	output: {
    filename: 'main.js',
    path: path.resolve( __dirname, 'dist' )
  },
}

const compiler = webpack( backend )
compiler.outputFileSystem = memfs
compiler.run((err, stats) => {
  //console.log(stats)
  console.log( new Function(compiler.outputFileSystem.readFileSync(`${backend.output.path}/main.js`).toString())() )
});

