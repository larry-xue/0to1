# 构建优化

## Tree-shaking
- 上下文未用到的代码(dead code)
  - 必须是模块化的
- 基于ES6 import export

## webpack作用域提升
- 代码体积减小
- 提高执行效率

## Babel7优化配置
- 在需要的地方引入polyfill（兼容性实现）

## webpack依赖优化
webpack打包过程提速

- noParse
- DllPlugin
  - 提取重复引用的库

## 基于webpack的代码拆分

- 把单个bundle拆分成若干个小bundle
  - 业务和第三方库拆分成两个bundle
- splitChunks提取共有代码
- 动态加载

## 基于webpack的资源压缩
- Minification
  - Terser压缩JS
  - mini-css-extract-plugin
  - HtmlWebpackPlugin

## 基于webpack的持久化缓存方案
- 每个打包的资源文件有唯一的hash值
- 修改后只有受影响的文件hash变化
- 充分利用浏览器缓存

## 基于webpack的监测和分析

- Stats
- 。。。