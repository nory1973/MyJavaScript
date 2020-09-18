//条件分岐　if else elseif
//if(条件){
//条件を満たしたときの処理    
//}

var age = 22;
if (age >= 20){
    console.log("adlut");
}
//if(条件A){
//条件Aを満たしたときの処理    
//}else{
//条件を満たさないときの処理    
//}

age = 18
if (age >= 20){
    console.log("adlut");
} else {
    console.log("child")
}

age = 22
if (age >= 20){
    console.log("adlut");
} else {
    console.log("child")
}

//if(条件A){
//条件Aを満たしたときの処理
//}else if(条件B){
//条件Bを満たしたときの処理
//else{
//条件を満たさないときの処理    
//}

var age = 0;
if (age >= 20){
    console.log("adult");
} else if (age == 0){
    console.log("baby");
} else {
    console.log("child");
}
