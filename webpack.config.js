const path = require('path');

module.exports = {
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
          // {
          //   loader: 'inspect-loader',
          //   options: {
          //     callback(inspect) {
          //       console.log(inspect);
          //     }
          //   }
          // },
          {
            loader: "extract-loader",
            options: {
              publicPath: "",
            }
          },
          {
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    type: 'src',
                    attribute: 'src'
                  },
                  {
                    tag: 'link',
                    type: 'src',
                    attribute: 'href'
                  },
                ]
              }
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
          },
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 64,
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
          // {
          //   loader: "file-loader",
          //   options: {
          //     esModule: false,
          //     name: '[name].[ext]'
          //   }
          // },
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
