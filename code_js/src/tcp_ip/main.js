const net = require("net")
const os = require("os")


function osProps() {
  console.log(os.networkInterfaces())
  console.log(os.cpus())
}

osProps()

// 创建Socket连接
const client = net.createConnection({port: 3003}, () => {
  console.log('已连接到服务器');
  client.write('你好世界!\r\n');
})

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
})

client.on("end", () => {
  console.log('已从服务器断开');
})

client.on("error", (error) => {
  console.log(`connect error ${error.message}`)
})
