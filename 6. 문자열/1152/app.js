// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split(" ");

if (input[0] === "") {
  console.log(0);
} else {
  console.log(input.length);
}
