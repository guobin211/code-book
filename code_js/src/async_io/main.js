const { spawn } = require("child_process")
const { Worker, isMainThread, workerData } = require("worker_threads")
const { jobsStart } = require("./jobs")
const { taskStart } = require("./tasks")

const { env, argv, pid, ppid, debugPort, execPath } = process

// 微任务jobs，宏任务tasks, 多线程worker_threads，子进程child_process

async function start() {
  console.log(`nodejs 主进程启动，process_id: ${pid}, ppid: ${ppid}, debug: ${debugPort}`)
  console.log("nodejs 环境变量，env: ", env)
  console.log("nodejs 程序执行参数，argv: ", argv)

  const data = [2, 3, 8, 9, 4, 5, 1, 7, 0, 6]

  if (isMainThread) {
    console.log("在主线程中加载Worker子线程")
    const wk = new Worker(__dirname + "/workers/index.js", { workerData: data })
    wk.on("message", (value) => {
      console.log(`main thread receive message ${value}`)
      console.log(data)
    })
    wk.on("error", err => {
      console.log(`main thread receive error from sub ${err.name}: ${err.message}`)
    })
    wk.on("exit", (code) => {
      console.log(`sub thread exit with code: ${code}`)
    })
  }

  const cp = spawn("bash", [__dirname + "/forks/check.sh"])
  cp.stdout.on("data", (data) => {
    console.log(`子进程输出数据: ${data}`)
  })
  cp.stderr.on("data", (data) => {
    console.log(`子进程发生错误: ${data}`)
  })
  cp.on("close", (code) => {
    console.log(`子进程退出 code: ${code}`)
  })

  // task后执行
  taskStart()
  // jobs先执行
  jobsStart()

}

start().then(() => {
  console.log("nodejs 进程启动完成")
})
