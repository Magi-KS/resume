const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './resume.html',
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]'
            }
          },
        'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['link:href', 'img:src']
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: '[name].[ext]'
            }
          },
          {
            loader: "babel-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    liveReload: true,
    watchContentBase: true,
  }
};
