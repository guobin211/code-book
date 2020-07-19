// 引入包
#include <iostream>

// 使用标准库中的对象
using namespace std;

int main() {
    int age = 18;
    float price = 9.9f;
    double amount = 98.98;
    long long int counts_of_person = 1480000000;
    bool is_first_language;
    char char_code = 'c';
    is_first_language = char_code < amount;
    printf(is_first_language ? "cpp is my first language\n" : "cpp not my first language\n");
    printf("hello world!\n");
    cout << "age is " << age << endl;
    printf("price is %f \n", price);
    printf("amount is %f and counts is %lld\n", amount, counts_of_person);
    return 0;
}
