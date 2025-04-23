以下是一份针对 Senior 前端开发工程师面试中常见的 **Coding** 部分的题目清单，涵盖核心 JavaScript 算法、进阶 JS 概念、React 专项挑战、CSS/HTML 布局题，以及前端性能优化与简易系统设计题。每个板块均列出典型题目，建议在 LeetCode、AlgoExpert、Big Frontend Dev、GreatFrontEnd、FrontendPro 等平台上练习，以系统化提升应对真实面试的实战能力。 citeturn0search2turn0search3

## 核心 JavaScript 算法题  
这一部分聚焦于基础但高频的 JavaScript 手写算法题，考察柯里化、节流防抖、数组操作等核心能力。 citeturn0search0turn0search4  
- 实现 `Array.prototype.flat()`：扁平化多维数组，考察递归或栈的运用。 citeturn0search0  
- 实现函数柯里化 `curry()`：支持可变参数及占位符写法。 citeturn0search0  
- 实现基本 `debounce()` 及带 `leading`/`trailing` 选项的 `throttle()`：掌握高阶函数与定时器。 citeturn0search0  
- 链表两数相加（Two Sum in Linked List）：结合链表与算术运算，建议在 GreatFrontEnd 上练习。 citeturn0search6  
- 反转字符串（Reverse a String）：基础字符串操作与内置方法考察。 citeturn0search4  
- 判断字符串是否为回文（Palindrome Test）：字符串清洗与双指针思路。 citeturn0search4  
- 将数组分块（Chunk an Array）：分片操作，检验 `slice` 与循环控制。 citeturn0search4  

## 进阶 JavaScript 概念题  
涵盖深拷贝、自定义 Promise、Event Loop 等更高阶主题，考察对 JS 运行机制的理解与应用。 citeturn0search8turn0search9  
- 实现深拷贝（Deep Clone）：支持对象、数组、循环引用。 citeturn0search8  
- 手写简易 `Promise`：实现 `then` 链式调用与错误捕获。 citeturn0search9  
- 改进版节流防抖（支持 leading/trailing）：结合高阶函数与定时器选项。 citeturn0search0  
- 模拟 Event Loop 执行顺序：输出宏任务与微任务调度流程。 citeturn0search9  
- 并发请求限制：实现批量异步请求中最多同时执行 N 个。 citeturn0search2  

## React 专项挑战  
针对 React 框架，重点在自定义 Hook、组件设计及虚拟 DOM 原理。 citeturn0search5turn0search7  
- 手写 `useState`：模拟状态读写与组件重渲染机制。 citeturn0search5  
- 自定义 `useDebounce` Hook：实现值防抖并返回最新结果。 citeturn0search5  
- 受控表单组件（Controlled Form）：含表单验证与错误提示。 citeturn0search7  
- 选项卡组件（Tabs Component）：支持无障碍（ARIA）与动效。 citeturn0search7  
- 简化版虚拟 DOM Diff 算法：对比两个树并更新真实 DOM。 citeturn0search5  

## CSS／HTML 布局题  
检验布局、响应式设计及动画能力，是前端面试的常见环节。 citeturn0search9turn0search7  
- 水平垂直居中（Flexbox、Grid）：掌握多种居中方案与兼容性。 citeturn0search9  
- 响应式网格布局：结合 CSS Grid 与媒体查询。 citeturn0search9  
- 汉堡菜单动画：考察 CSS 过渡与关键帧动画。 citeturn0search7  
- 自定义滚动条：兼顾 Webkit、Firefox 不同语法。 citeturn0search6  
- 叠放上下文与 z-index 管理：熟悉 stacking context 原理。 citeturn0search9  

## 性能优化与简易系统设计题  
侧重前端性能、懒加载、缓存策略，体现对工程化与用户体验的考量。 citeturn0search2turn0search5  
- 图片懒加载（Lazy Load Images）：减少首屏资源请求。 citeturn0search2  
- 代码分割（Code Splitting）：按需加载模块，优化首屏。 citeturn0search2  
- 前端缓存方案：设计 localStorage/IndexedDB 缓存策略。 citeturn0search5  
- 路由守卫（Route Guard）：简单权限校验中间件。 citeturn0search5  
- Intersection Observer 无限滚动：实现“下拉加载更多”效果。 citeturn0search7  

---

**推荐练习平台**  
- **LeetCode**：海量算法题库，侧重数据结构与机制 citeturn0search10  
- **AlgoExpert**：50+ 前端专项题目与解析 citeturn0search3  
- **Big Frontend Dev**：前端专项链表、柯里化、扁平化等 citeturn0search0  
- **GreatFrontEnd**：500+ 综合题库，含测试用例与在线编码 citeturn0search6  
- **FrontendPro**：真实场景挑战与优秀解法 citeturn0search7  

通过上述清单的系统练习，你将全面提升对前端常见算法、框架原理、布局能力及性能优化思路的驾驭力，为 Senior 级面试中的 Coding 环节做好充分准备。祝你面试顺利！