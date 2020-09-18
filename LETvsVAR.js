//let
console.log("letを使う場合");
function f() {
  let x = 1;
  console.log(x);
  {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
f()

//var
console.log("varを使う場合");
function f2() {
    var x = 1;
    console.log(x);
    {
      var x = 2;
      console.log(x);
    }
    console.log(x);
  }
  f2()