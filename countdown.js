// カウントダウン
let max = 5;
for (let i = 0; i < max; i++) {
  setTimeout(() => {
    console.log(max - i);
  }, i * 1000);
}