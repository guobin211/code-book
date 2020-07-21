const { spawn, exec, execFile, fork } = require("child_process")

/**
 * 衍生创建子进程的方式
 */
function cpRun() {
  const tl = spawn("node", ["-v"])
  tl.stdout.on("data", (data) => {
    console.log(`node version is ${data}`)
  })
  tl.stderr.on("data", (data) => {
    console.log(`spawn error with ${data}`)
  })
  tl.on("close", (code) => {
    console.log(`子进程退出，退出码 ${code}`)
  })
}

cpRun()
