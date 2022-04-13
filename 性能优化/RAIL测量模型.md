# RAIL测量模型

## 什么是RAIL
- Response 响应
- Animation 动画
- Idle 空闲
- Load 加载

## RAIL的评价标准
- 响应：处理事件应在50ms以内完成（要留出浏览器处理的时间）
- 动画：每10ms产生一帧（浏览器去绘制也需要时间）
- 空闲：尽可能增加空闲时间
- 加载：在5s内完成内容加载并可以交互

# 性能测量工具
- Chrome DevTools 开发调试、性能评测
- Lighthouse网站整体质量评估
- [WebPageTest.org](https://webpagetest.org)多测试地点、全面性报告
  - 关键指标
    - waterfall chart
    - first view 首次访问
    - repeat view 二次访问
  - 本地部署WebPageTest