# 高性能服务器

## 异步非阻塞的3种模式

1. select

2. poll / epoll

3. libevent

## Select

> 开子进程和线程来处理IO

```c++
  int select( int maxfdp,
              fd_set *readfds,
              fd_set *writefds,
              fd_set *errorfds,
              struct timeval *timeout);
```

## epoll

> epoll是多路复用IO(I/O Multiplexing)中的一种方式

## libevent

> 事件驱动
