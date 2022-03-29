# 常见webpack面试题

- webpack 如何实现软加载
- webpack 常见性能优化
- babel-runtime 和 babel-polyfill 的区别

# webpack基础入门

## 什么是入口和出口

如果没有配置webpack.config.js文件，webpack在打包时会使用默认配置
- 入口：entry
- 出口：output

## 什么是loader

loader可以扩展webpack能打包的文件类型，帮助我们处理不同模块

### 加载图片

- file-loader
  - 图片比较大，生成单独的jpg文件，去发送额外的http请求，js首次加载时间比较短
- url-loader
  - 好处：dist->少了.jpg文件->减少了一次图片的http请求
  - 坏处：如果图片太大，会让打包出来的js文件过大->页面加载完毕时间很长 -> 空包页面
  - 图片比较小的时候(1,2kb)，可以考虑用url-loader
- css-loader
- style-loader
- sass-loader 
- postcss-loader
  - 根据不同浏览器内核更改css属性

### css模块化
```js
import styles from './index.scss';
```

### SourceMap
dist/boundle.js 第8行 -> src/index.js 第1行
SourceMap 建立映射关系

#### 配置SourceMap

```js
    devtool: false,
    devtool: 'eval-source-map',
    // devtool: false, // 不想用SourceMap
    devtool: 'source-map', // 最简单的配置方法
    devtool: 'inline-source-map',
    devtool: 'inline-cheap-source-map', // 只会去记录业务代码的错误，不会去记录第三方模块和loader
    devtool: 'inline-cheap-module-source-map', // 可以记录第三方模块和loader
    devtool: 'eval', // 速度最快，一旦项目复杂，错误代码行数显示不准确
    devtool: 'eval-cheap-module-source-map', // 比较折中的选择
```

### 什么是WebpackDevServer

有变更时，自动打包

#### 使用WDS实现请求转发
开发时，可以使用相对路径
```js
    devServer: {
        port: 7999,
        static: path.join(__dirname, 'dist'),
        proxy: {
            '/test/api/breeds/image/random': {
                target: 'https://dog.ceo/',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    },
```

#### HMR模块热替换

### file-loader打包字体图标

## 什么是plugins



# webpack 基本配置
