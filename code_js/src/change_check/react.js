const { render } = require("./render")

class Button {

  constructor() {
    this.state = {
      text: "button"
    }
    // 异步更新
    setTimeout(() => {
      this.state.text = "changed"
    }, 3000);

    // setState callbacks
    this.task = []
  }

  render() {
    return this.state.text
  }

  setState(callback) {
    this.task.push(callback)
  }
}

const UI = new Button()

render(UI)

UI.setState(() => {
  text: "setState"
})
