let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split("\n");

// 테스트 케이스의 개수 T 구하기
const t = parseInt(input[0]);

for (let i = 0; i < t; i++) {
  const array = input[i + 1].trim().split(" ");
  // 반복횟수 R 구하기
  const r = parseInt(array[0]);
  const testCase = array[1].trim().split("");
  //문자열 S 구하기
  let s = "";
  for (let j = 0; j < testCase.length; j++) {
    const words = testCase[j];
    const repeatWords = words.repeat(r);
    s = s.concat(repeatWords);
  }
  console.log(s);
}
