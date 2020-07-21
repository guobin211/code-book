const {
  isMainThread, parentPort, workerData
} = require("worker_threads")

console.log("worker is running")

async function run() {
  if (isMainThread) {
    console.warn("worker can not run in MainThread")
  } else {
    // workerData是从主线程拷贝了一份数据
    const _data = workerData
    _data.sort((a, b) => {
      return a - b
    })
    parentPort.postMessage(_data)
  }
}

run().then().finally(() => {
  process.exit(0)
})
