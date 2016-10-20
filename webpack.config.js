module.exports = {
  entries: {
    index: './src/index.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname + '/src/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
