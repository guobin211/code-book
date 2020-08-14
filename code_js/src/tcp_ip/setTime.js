let count = 1
let iCount = 1
let timer
let interval
function loop() {
  job()
  if (count > 10) {
    clearTimeout(timer)
    clearInterval(interval)
    return
  }
  // setTimeout 最小4ms
  timer = setTimeout(() => {
    loop()
  }, 4)
}

function job() {
  console.log(count++);
}

function interLoop() {
  // setInterval 规定最小10ms, node最小1ms
  interval = setInterval(() => {
    console.log(iCount++);
  }, 5)
}

interLoop()
loop()

