# CSS复习

## HTML语义化
1. 有利于SEO（搜索引擎优化）
2. 便于阅读，修改
3. 对盲人等不方便浏览网页的人来说比较方便

## 盒模型
盒模型有border-box和content-box两种，默认是content-box
1. content-box: 设置的宽度就是内容宽度，整个盒子的宽度还要加上padding、border
2. border-box: 设置的宽度就是内容宽度+padding+border，因此内容宽度的实际大小要减去border和padding

## margin合并
两个相邻的元素，分别设置margin，它们的间距不是两个margin的和，而是由较大的margin决定

## margin 负值
1. top & left: 元素向上 or 向左拖拽
2. bottom & right: 元素本身不变，下边元素上移 or 右边元素左移

## BFC
Block formatting context 块级格式化上下文
形成独立的渲染区域
内部元素的渲染不会影响外界

形成BFC常见的条件
1. 浮动元素   float 不是 none
2. 绝对定位元素 position是absolute或者fixed
3. 块级元素 overflow 不是 visible
4. flex元素
5. inline-block元素

应用场景：清除浮动等...

## 圣杯布局
目的：
1. 两侧内容宽度固定，中间内容宽度自适应
2. 三栏布局，中间一栏最先加载，渲染出来

## 实现双飞翼布局
null

## flex布局

### flex常用语法

#### 父级容器相关
|  属性名   | 内容  | 作用 |
|  ----  | ----  | ---- |
| flex-direction  | 主轴方向 | 水平 or 垂直 |
| justify-content  | 主轴上的对齐方式 | 开始对齐，结束对齐，居中对齐，两端对齐 |
| align-items | 交叉轴上的对齐方式 | 开始对齐、结束对齐、居中对齐 |
| flex-wrap | 是否换行 || 

#### 子元素相关
align-self: 子元素在交叉轴上的对齐方式，可以覆盖align-items

## absolute 和 relative
1. relative定位 相对于 自身 定位
2. absolute 定位 相对于 最近的一层父级定位元素 定位
定位元素 relative absolute fixed 或 body

## 水平居中

- 行内 inline 元素 text-align: center
- 块级 block 元素 margin: 0 auto
- absolute定位元素 left: 50%; margin-left: 负值；

```html
<!-- 如果是上下左右居中 -->
<style>
    .parent {
        display flex;
    }

    .son {
        margin: auto;
    }
</style>

<div class="parent">
    <div class="son></div>
</div>
```

## 垂直居中

- 行内元素: line-height的值等于height的值
- absolute元素 
    - top: 50% + margin-top 负值 (需要知道尺寸)
    - transform: translate(-50%, -50%); （可以不考虑尺寸，css3，兼容性有问题）
    - top, left, bottom, right = 0 + margin: auto

## line-height继承时的坑
line-height继承，如果是百分比的话，需要先算出结果，然后再继承。

## 什么是rem
- px 绝对长度单位
- em 相对长度单位，相对于父元素
- rem 相对长度单位，相对于html根元素