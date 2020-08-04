module.exports = {
  title: "Design Code",
  description: "just learn code with design",
  port: 8099,
  base: "/design_code/",
  dest: "build",
  themeConfig: {
    nav: [
      {text: "GitHub", link: "https://github.com/guobin211/design_code"}
    ],
    sidebar: [
      {title: "进程线程与协程", path: "/01Process/"},
      {title: "高性能服务器", path: "/02Server/"},
      {title: "TCP", path: "/03TCP/"},
      {title: "UDP", path: "/04UDP/"},
      {title: "WebRTC", path: "/05WebRTC/"},
      {title: "SDP", path: "/06SDP/"},
      {title: "P2P", path: "/07P2P/"},
      {title: "Web", path: "/08Web/"},
    ],
    sidebarDepth: 2
  }
}
