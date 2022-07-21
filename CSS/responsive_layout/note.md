# responsive layout

## basic knowledge

### media query

- 主要用在移动端
- 常用参数
  - 阿松大

```html
<!-- 两种处理方式 -->
<style>
  @media screen and (min-device-width: 100px) and (max-device-width: 200px) {
  }
</style>
<style media="(min-device-width: 100px) and (max-device-width: 200px)"></style>
<!-- 在不同情况下引入不同的样式 -->
<link href="xxx" media="(min-device-width: 100px) and (max-device-width: 200px)"></link>
```
