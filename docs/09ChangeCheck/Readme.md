# ChangeCheck变更检测

## 变更检测原理

innerHTML:  render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)

## 前端框架的变更检测

初始渲染：Virtual DOM > 脏检查 >= 依赖收集
小量数据更新：依赖收集 >> Virtual DOM + 优化 > 脏检查（无法优化） > Virtual DOM 无优化
大量数据更新：脏检查 + 优化 >= 依赖收集 + 优化 > Virtual DOM（无法/无需优化）>> MVVM 无优化

### Vue2.x数据劫持

依赖收集：重新收集依赖 O(data change) + 必要 DOM 更新 O(DOM change)

### React VDom Diff算法

Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)

1. 函数式编程
2. 可以渲染到其他平台

### Angular 脏检查

脏检查：scope digest O(watcher count) + 必要 DOM 更新 O(DOM change)
