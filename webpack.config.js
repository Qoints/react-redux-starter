module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ["transform-decorators-legacy"]
      }
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
