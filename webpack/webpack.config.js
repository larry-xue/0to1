// CommonJS 语法
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'azoux.js',
        // publicPath: 'http://cdn.xxx.com/' // 在打包文件引用处加上public前缀 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'), // 用这个文件作为模板打包
            filename: 'index.html'
        }),
        new CleanWebpackPlugin() // 打包前会自动清除dist文件夹
    ],
    devServer: {
        port: 7999,
        static: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }, {
            test: /.(png|jpg|gif)$/,
            // use: 'file-loader',
            use: {
                loader: 'url-loader',
                options: {
                    // 中括号语法：占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 4096 // 如果图片大于4kb就单独打包成文件
                }
            },
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }, {
            test: /.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}