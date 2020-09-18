//javascriptのクラス
//データ（変数）・・・プロパティ
//処理（関数）・・・メソッド
//クラスを定義する
//クラス宣言　クラス式

class Student {  //クラス名の最初の文字は大文字にする
    constructor(name){
        this.name = name;
    }
    avg(math, english){  //数学と英語の平均を計算するメソッド名
        console.log((math + english)/2);
    }
}

var a001 = new Student("sato");//インスタンス化
var a002 = new Student("suzuki");
console.log(a001.name);
a001.avg(80, 70);
console.log(a002.name);
a002.avg(50, 90);
//インスタンス毎にプロパティを指定する必要があるが、面倒
//そこでコンストラクタ（初期化メソッド）を使う


//クラス式の記述
//var Student = class{
//    constructor(name){

//    }
//};

//class2.jsに続く




