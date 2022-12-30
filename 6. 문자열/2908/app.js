// 두 수 A, B 입력받기
// A와 B의 수를 거꾸로 저장 후 크기 비교

let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split(" ");

const array = [];

for (let i = 0; i < input.length; i++) {
  const x = parseInt(input[i] / 100);
  const y = parseInt(input[i] / 10) % 10;
  const z = parseInt(input[i] % 10);
  array.push(z * 100 + y * 10 + x);
}

if (array[0] > array[1]) {
  console.log(array[0]);
} else {
  console.log(array[1]);
}
