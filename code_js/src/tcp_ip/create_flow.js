function createFlow(effects = []) {
  let sources = effects.slice().flat()
  function run(callback) {
    while (sources.length) {
      const task = sources.shift()
      const next = createFlow(sources).run(callback)
      if (typeof task === "function") {
        const res = task()
        if (res && res.then) {
          res.then(next)
          return
        }
      } else if (task && task.isFlow) {
        task.run(next)
        return
      }
    }
    callback && callback()
  }
  return {
    run,
    isFlow: true
  }
}

const log = console.log

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);

createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});
