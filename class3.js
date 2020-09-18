class Student{
    constructor(name){
     this.name = name;  
    }
    cal_avg(data){
        let sum = 0;
        for(let i = 0; i < data.length; i++){
            sum +=data[i];
        }
        let avg = sum / data.length;
        return avg;
    }
    judge(ave){
        let result;
        if (60 <= avg){
            result ="passed";
        }else{
            result = "failed";
        }
        return result;
    }
}
//クラスをインスタンス化する
let a001 = new Student("sato");
let data = [70,65,50,90,30];
let avg = a001.cal_avg(data);
let result = a001.judge(avg);

console.log(data.length);
console.log(a001.name);
console.log(avg);
console.log(result);

