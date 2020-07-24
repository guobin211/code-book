async function jobs1() {
  console.log("jobs1 start");
  await jobs2();
  console.log("jobs1 end");
}

async function jobs2() {
  console.log("jobs2 start");
}

console.log("script start");
jobs1().then(() => {
  console.log("jobs1 then");
});
console.log("script end");
