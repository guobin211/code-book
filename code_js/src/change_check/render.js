
let interval;
let older;
function render(vdom) {
  clearInterval(interval)
  interval = setInterval(() => {
    // 只更新变更的数据
    if (older !== vdom.render()) {
      older = vdom.render();
      console.log(vdom.render());
    }
    // 模拟浏览器16ms渲染, 每个周期做dom-diff
  }, 1600)
}

module.exports = {
  render
}
