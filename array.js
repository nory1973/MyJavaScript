//配列
//インデックスは０から始まる
//Array() or []

//Array()
var a = new Array(3);

a[0] = "sato";
a[1] = "suzuki";
a[2] = "tanaka";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

var b = new Array("sato","suzuki","tanaka");

console.log(b[0]);
console.log(b[1]);
console.log(b[2]);

//[]
var c = ["sato","suzuki","tanaka"]
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);

//配列の変更
c[2] = "sakamoto";
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);

//二次元配列
var d = [["sato","suzuki"],["tanaka","sakamoto"]];

console.log(d[0][0]);//sato
console.log(d[0][1]);//suzuki
console.log(d[1][0]);//tanaka
console.log(d[1][1]);//sakamoto



