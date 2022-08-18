const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

function getCSSLoaders(extra) {
  const loaders = ['style-loader', 'css-loader']

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: getCSSLoaders('sass-loader')
      },
      {
        test: /\.css$/,
        use: getCSSLoaders(),
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      title: 'online-store',
      favicon: path.resolve(__dirname, '../src/assets/favicon.png'),
    }),
  ],
  stats: 'errors-only',
};