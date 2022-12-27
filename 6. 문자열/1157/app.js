// 입력된 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");

// 중복된 배열 값의 개수 구하기
const result = [];
input.forEach((x) => {
  result[x] = (result[x] || 0) + 1; // ( true || false ) + 1
});

// 점 표기법 해체 && Key - Value
const { ...array } = result;
const keys = Object.keys(array);
const values = Object.values(array);

// 배열 result에 중복된 값이 있는지 확인하기
let hasDuplicates = new Set(values).size != values.length;

if (hasDuplicates) {
  console.log("?");
} else {
  // value가 최댓값인 key 구하기
  const max = Math.max(...values);
  const key = keys.find((key) => result[key] === max);
  console.log(key);
}
