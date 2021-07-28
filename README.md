## 提取打包成js中css分开用mini-css-extract这个插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
 plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css'
    })
  ],

## 使用postcss-loader 和postcss-preset-env 来处理css的兼容姓问题
## 具体用法见官方文档 webpack 
https://webpack.js.org/loaders/postcss-loader/#postcss-preset-env