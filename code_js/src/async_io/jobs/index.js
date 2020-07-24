console.log("jobs module loader")

/**
 * 微任务
 * 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务,可以理解为回调事件。
 * promise.then，process.nextTick，MutationObserver，Observer
 * 宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护
 */
function jobs() {
  process.nextTick(() => {
    console.log("jobs module run process.nextTick")
  })

  new Promise(resolve => {
    console.log("jobs module run new Promise")
  }).then(() => {
    console.log("jobs module Promise resolved")
  }).catch(console.warn).finally(() => {
    console.log("jobs module Promise finally")
  })

}

module.exports = {
  jobsStart: jobs
}
