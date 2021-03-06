var config = {
  entry: './index.js',
	
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
var webpack = require('webpack')

module.exports = config