//算術演算子
var x = 10;
var y = 2;
var z = 10;

console.log( x + y );
console.log( x - y );
console.log( x * y );
console.log( x / y );
console.log( x % y );

//関係演算子
console.log(x > y);//true
console.log(x < y);//false

console.log(x <= z);//true
console.log(x >= z);//true
console.log(x < z);//false
console.log(x > z);//false

//等価演算子(==, !=)
console.log(x == y);//false
console.log(x != y);//true

//論理演算子 and(&&) or(||
var xx = 8;
var yy = 3;
console.log(xx >= 5 && xx <= 10); //true
console.log(yy >= 5 && yy <= 10); //false

console.log(xx == 3 || yy == 3); //true
console.log(xx == 1 || yy == 1); //false

//複合代入演算子 +=, -=
var xxx = 8;
var yyy = 12;
var zzz = 20;
xxx += 10;
zzz += yyy;
yyy -= zzz

console.log(xxx);//18
console.log(zzz);//32
console.log(yyy);//-20

//インクリメント、デクリメント
//変数名++ 値を１ずつ増やす
//変数名-- 値を１ずつ減らす

var p = 8;
var q = 8;

p++;//インクリメント　P = P + 1
q--;//デクリメント　q = q - 1

console.log(p);
console.log(q);



