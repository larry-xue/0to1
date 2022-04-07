# computed与watch的区别

## 两者用途不同

- computed用于计算产生新的数据，有缓存
- watch用于监听现有数据

## computed知识点

- computed有缓存
  - 依赖的值不变，就不会重新计算
- method没有缓存
  - 每次获取都会重新计算