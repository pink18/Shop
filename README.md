### 项目开发流程
#### 第一步 根据UI设计稿；写页面
- 初始化项目目录
- 写公共部分的样式
- 部署 项目基本框架；实现单页面切换

### 第二天的任务；
任务一
- 1 首页的滚动加载更多 
- 2 注意 滚动的滚动条 是 iframe 还是 浏览器的
- 3 在首页监听滚动条事件监听不到的。 因为；监听滚顶比 iframe 记载 程序快了
  - 1 选择在  iframe 中监听  浏览器的滚条 （加载后监听的）
  - 2 在浏览器中 迟延监听滚动条

 任务二
- 详情页面展示 
   - 1: 根据商品id 获取商品详情 
     - 问题：商品id 不在详情页面；---> 页面间传值  不要localstrorage  
     - 1.数据是临时数据  不是持久数据  ---> sessionStorage 或者url
     - 2.url 弊端  导致浏览器有缓存
   - 2：根据你选择的 商品 的type_one 一级分类；获取相关商品
     - 问题：页面件传值；
     - 问题：一个页面两个请求   loading 的优化 
     - 最后 等最后一个请求结束后再消失     


任务三 分类商品；一个页面 基本样式功能模拟出来