//
// Created by 郭斌 on 2020/7/21.
//
#include <stdio.h>

void read_file()
{
    FILE *fp;
    char buff[1024];
    fp = fopen("CMakeLists.txt", "r");
    fscanf(fp, "%s", buff);
    printf("1: %s\n", buff);
    fclose(fp);
}
