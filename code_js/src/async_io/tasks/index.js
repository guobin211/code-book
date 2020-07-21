const fs = require("fs")
console.log("tasks module loader")

/**
 * 宏任务
 * 当前调用栈中执行的代码成为宏任务。（主代码快，定时器等等）
 * I/O、setTimeout、setInterval、setImmediate、requestAnimationFrame
 */
function task() {
  // io
  fs.readFile(__dirname + "/index.js", "utf-8", (err, buff) => {
    if (err) {
      console.warn("readFile with error", err)
    } else {
      console.log("readFile size is ", buff.length)
    }
  })
  // timer
  setTimeout(() => {
    console.log("task module run setTimeout")
  }, 5)

  // 立即执行
  setImmediate((args) => {
    console.log(`task module setImmediate run with args: ${args}`)
  }, "setImmediate")
}

module.exports = {
  taskStart: task
}
