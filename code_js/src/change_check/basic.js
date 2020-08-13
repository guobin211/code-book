let data = {
  name: "John"
}

function changeName(name) {
  data.name = name
  render()
}

function render() {
  console.log(data);
}
// first render
render()
// changed render
changeName("mark")
changeName("mary")
