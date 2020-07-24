const promise2 = () => new Promise((resolve) => {
  console.log("promise2 start");
  setTimeout(resolve, 10);
  console.log("promise2 end");
})

const promise1 = () => new Promise((resolve) => {
  console.log("promise1 start");
  promise2().then();
  setTimeout(resolve, 10);
  console.log("promise1 end");
});

console.log("script start");
promise1().then();
console.log("script end");
