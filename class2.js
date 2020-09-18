//javascriptのクラス
//データ（変数）・・・プロパティ
//処理（関数）・・・メソッド
//クラスを定義する
//クラス宣言　クラス式
var Student = class {  //クラス名の最初の文字は大文字にする
    constructor(name){ //コンストラクタ（初期化メソッド）
        this.name = name; //プロパティ = 
    }
    avg(math, english){  //数学と英語の平均を計算するメソッド名
        console.log((math + english)/2);
    }
};

var a001 = new Student("sato");//インスタンス = クラス
var a002 = new Student("suzuki");
console.log(a001.name);
a001.avg(80, 70); //メソッド
console.log(a002.name);
a002.avg(50, 90);

//クラスを用いることで簡単になる