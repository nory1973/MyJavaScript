//for文
//for(スタート値(カウンタ変数);継続条件;増減式){
//    
//}
console.log("for");
for(var i = 0; i <= 4; i ++){
    console.log(i);
}
//break;　繰り返し処理を修了
console.log("break(until 2)");
for(var i = 0; i <= 4; i ++){
    if(i == 3){
        break;
    }
    console.log(i);
}
console.log("continue(skip 3)");
//continue; 処理をスキップ
for(var i = 0; i <= 4; i ++){
    if(i == 3){
        continue;
    }
    console.log(i);
}

//nest 
console.log("nest");
for(var i = 0; i <= 2; i ++){
    for(var j = 0; j <= 2; j ++){
        console.log( i + "-" + j );
    }
}
//カウンタ変数を使って配列の中身を表示する
var arr = [2,4,6,8,10];
var sum = 0;

for(var i = 0; i <= 4; i ++){
    console.log(arr[i]);
    sum += arr[i];
}
console.log(sum);

