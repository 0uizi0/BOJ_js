let fs = require("fs");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

const res = [];

for (let i = 97; i <= 122; i++) {
  // String.fromCharCode([아스키코드값]); : 아스키코드를 문자열로 변환
  // indexOf ; String 객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환, 없으면 -1 반환
  // => 97부터 122까지의 아스키코드를 문자열로 변환한 후, input 배열과 값을 비교해 인덱스 혹은 -1을 res 배열에 반환
  res.push(input.indexOf(String.fromCharCode(i)));
}

console.log(res.join(" "));
