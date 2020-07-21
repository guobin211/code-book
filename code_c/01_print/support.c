//
// Created by 郭斌 on 2020/7/20.
//
#include <stdlib.h>
#include <stdio.h>

extern int count;

void write_extern(void)
{
    printf("count is %d\n", count);
}

void m_build_array()
{
    int arr[10];
    for (int i = 0; i < 10; i++) {
        arr[i] = i;
    }
    printf("arr is %n\n", arr);
    printf("arr[0] is %d\n", arr[0]);
    printf("size is %lu\n", sizeof(arr));
}

void m_pointer_test()
{
    int price;
    char str[10] = "abcdefg123";
    // &price = 0x7ffee2ddf6a8
    printf("price 变量的地址： %p\n", &price);
    printf("str 变量的地址： %p\n", &str);
    // 创建指正变量
    char *p = malloc(10);
    *p = 'a';
    *(p + 1) = 'b';
    printf("%s\n", p);
    free(p);
}

int m_max(int a, int b)
{
    return a > b ? a : b;
}
