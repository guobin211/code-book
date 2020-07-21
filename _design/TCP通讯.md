## TCP通讯

面向连接的、可靠的、基于字节流的传输层通信协议

### TCP连接过程

##### 1.三次握手

> 防止服务器端开启一些无用的连接增加服务器开销
> 防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误
> 断线重连和超时关闭

```shell script

    // 标记位，序号，用于数据标记
    SYN=1,seq=x;

    SYN=1,ACK=1,seq=y,ack = x + 1;

    ACK=1,seq=X+1,ack=y+1;

```


##### 2.四次挥手

> Server Socket的生命周期状态

```shell script

    // 待命，监听中
    ESTABLISHED
    // 关闭等待
    CLOSE_WAIT
    // 最后确认
    LAST_ACK
    // 已经关闭
    CLOSED

```

```shell script

    // 标记位置为FIN，代表关闭连接的请求
    Client => SYN=FIN,seq=U; 客户端进入FIN-WAIT-1状态

    Server => SYN=ACK,seq=V; 服务端状态转为CLOSE-WAIT

    Server => FIN，ACK; 已经准备好释放连接了,准备`last check`

    Client => ACK,seq,ack; 客户端TIME-WAIT阶段

```


### Server端

1.socket

2.bind

3.listen

4.accept

5.recv

6.send

7.close


### Client

1.socket

4.connect

5.send

6.recv

7.close
