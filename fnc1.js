//function 関数名(){
//    実行したい処理
//}
console.log("1.引数無し");
function say_hello(){
    console.log("Hello World");
};
say_hello();

//関数式（変数に関数を書く）
//var 変数名 = function 関数名(){
//    実行したい処理
//};

console.log("2.関数式");
var hello = function (){
// == var hello = function say_hello2(){ 中の関数名は無くても良い
    console.log("Good moring");
};

hello();

console.log("3.引数あり");
//引数あり関数
function say_hello3(greeting){//greeting=仮引数
    console.log(greeting);
};

say_hello3("good afternoon")//good morining=実引数
say_hello3("good night")
say_hello3("good bye")

console.log("4.計算");
//
function cal(x){
    console.log(x * 3);
};

cal(6);

function cal2(x, y){
    console.log(x * y);
    console.log(x / y);
    console.log(x + y);
    console.log(x - y);
};

cal2(200, 9);

console.log("5.戻り値のある関数");
//メリット：return(戻り値)を用いると計算結果を後の処理で再利用できる
function cal3(x,y){
    return x/y ;
};
var result = cal3(6,3);
console.log(result);

console.log("5.確認問題");
console.log("ver.return");
function sumsum (a,b,c){
    return a + b + c;
};
var result = sumsum(10,5,8);
console.log(result);

console.log("ver.no return");
function sumsum2(a,b,c){
    console.log(a + b + c);
    console.log(a * b * c);
};
sumsum2(7,8,9);

console.log("ver.multiple return");
function sumsum3(a,b,c){
 
    [o,p,q]=[a*3,b*5,c*7]
 
//    o = a * 3;
//    p = b * 5;
//    q = c * 7;
//  var o = a * 3;
//   var p = b * 5;
//   var q = c * 7;
    return [o,p,q];
};
var [o, p , q] = sumsum3(2,6,7);
console.log(o);
console.log(p);
console.log(q);
