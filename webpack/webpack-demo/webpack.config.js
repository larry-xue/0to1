const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  WebpackManifestPlugin
} = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清理dist文件夹
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }), new HtmlWebpackPlugin({ // Also generate a test.html
      filename: () => `test.html`,
    }), new WebpackManifestPlugin({})
  ],
  devtool: 'inline-source-map', // 追踪代码错误
  devServer: {
    static: './dist', // 告知 dev serve 从什么位置查找文件
  },
  module: {
    rules: [{
      test: /\.css$/i,
      // 模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.less$/i,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    }, {
      test: /\.toml$/i,
      type: 'json',
      parser: {
        parse: toml.parse,
      },
    }, {
      test: /\.yaml$/i,
      type: 'json',
      parser: {
        parse: yaml.parse,
      },
    }, {
      test: /\.json5$/i,
      type: 'json',
      parser: {
        parse: json5.parse,
      },
    }]
  },
  optimization: {
    // 因为在这个示例中单个 HTML 页面有多个入口，所以添加了 optimization.runtimeChunk: 'single' 配置
    runtimeChunk: 'single',
  },
}