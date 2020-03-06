const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './resume.html',
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
        'file-loader?name=[name].[ext]',
        'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['script:src', 'link:href']
            }
          }
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: true
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
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    liveReload: true,
    watchContentBase: true,
  }
};
