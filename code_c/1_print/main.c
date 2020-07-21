#include <stdio.h>

int x, y;

int add()
{
    x = 1;
    y = 2;
    return x + y;
}

int count;

extern void write_extern();

extern void m_build_array();

extern void m_pointer_test();

extern int m_max();

extern void read_file();

struct User {
    int age;
};

int main()
{
    int age = 20;
    char one_bit = 'Z';
    // 无符号
    unsigned char un_one_bit = 'a';
    short s_int = 32767;
    long l_int = 2147;
    printf("age is %d\n", age);
    printf("one_bit %d\n", one_bit);

    int res = add();
    printf("res is %d\n", res);

    count = 5;
    write_extern();

    m_build_array();
    // 结构体
    struct User user;
    user.age = 18;
    printf("user age is %d\n", user.age);
    // 指针
    m_pointer_test();

    {
        // 9x9乘法表
        for (int i = 1; i <= 9; ++i) {
            for (int j = 1; j <= i; ++j) {
                printf("%dx%d=%d\t", j, i, i *j);
            }
            printf("\n");
        }
    }

//    int c;
//    printf("Enter a value: \n");
//    c = getchar();
//    printf("You entered: ");
//    putchar(c);
//    printf("\n");

//    char input_str[100];
//    printf("Enter String: \n");
//    scanf("%s", input_str);
//    printf("You Write\n");
//    puts(input_str);
//    printf("\n");
//
    // 函数指针
//    int (* max_fun)(int, int) = & m_max;
//    printf("请输入三个数字: ");
//    int a,b,c,d;
//    scanf("%d, %d, %d", &a, &b, &c);
//    d = max_fun(max_fun(a,b), c);
//    printf("最大的数字是: %d\n", d);

    return 0;
}
