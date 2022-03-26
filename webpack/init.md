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

## 什么是plugins



# webpack 基本配置
