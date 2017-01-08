const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
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
  plugins: [new DashboardPlugin()],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
