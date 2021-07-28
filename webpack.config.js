const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 设置nodejs变量
process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 处理css的兼容问题 postcss-loader postcss-preset-env
          /**
           * 
           * "browserlist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1  safari version"
    ],
    "production": [
      ".2%",
      "not dead", 
      "not op_mini all"
    ]
  }
           */
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    }
                  ]
                ]
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css'
    })
  ],
  mode: 'development'
}