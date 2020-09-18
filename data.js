//動的型付け言語：javascript, python, ruby, php
//japascriptは、変数にデータを入れるときにデータ型を指定する必要がない。
//自動的にデータ型を判断してくれる→動的型付け言語
//静的型付け言語：C,　java, kotlin, Go

var num01 = 123;
var num02 = 1.23;

console.log(num01);
console.log(num02);

console.log(typeof(num01));
console.log(typeof(num02));

//数値型
//javascriptの数値型は、number型の一種類しかない。
//他の言語には、整数型や少数型などがある。

//文字型=string型
var string_a = "Hello World!"
console.log(string_a);
console.log(typeof(string_a));

//ブール型　true false
var a = 10;
var b = 1;
var bool01, bool02;

bool01 = (a > b);
bool02 = (a < b);
console.log(bool01);
console.log(typeof(bool01));
console.log(bool02);
console.log(typeof(bool02));


