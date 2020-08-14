const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 4)
})

pr.then(res => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("finally");
})
