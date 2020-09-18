console.log("ver.multiple return");
function sumsum3(a,b,c){
 
//    [o,p,q]=[a*3,b*5,c*7]
 
//    o = a * 3;
//    p = b * 5;
//    q = c * 7;
    let o = a * 3;
    let p = b * 5;
    let q = c * 7;

    return [o,p,q];
}
[o,p,q] = sumsum3(2,6,7);
console.log(o);
console.log(p);
console.log(q);

console.log("ver.multiple return2");
function sumsum4(d){ 
let oo, pp, qq //宣言だけ
    if ( d >= 10 ){
        oo = "d>=10";
    }else{
        oo = "d<10";
    }

pp = d * 5;
qq = d * 7;
return [oo,pp,qq];
};

[oo, pp , qq] = sumsum4(300);
console.log(oo);
console.log(pp);
console.log(qq);

let sum = pp + qq;
console.log(sum);