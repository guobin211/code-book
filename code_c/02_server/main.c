#include <stdio.h>
#include <stdlib.h>
#include <zconf.h>
#include <stdbool.h>

void dae_mon() {
    pid_t pid;
    // fork子进程，父进程退出子进程称为孤儿进程，被init接管，用于实现后台进程
    if ((pid = fork()) < 0) {
        printf("不能创建子进程");
    } else {
        if (pid != 0) {
            exit(0);
        }
    }
}

int main(int argc, char* argv[])
{
    bool is_first = true;
    printf("press ctrl c to stop\n");
    for (; ;) {
        if (is_first) {
            printf("第一次循环");
            is_first = false;
        }
    }

}
