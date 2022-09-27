let fs = require("fs");
const { type } = require("os");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let num = Number(input[0]);
let str = input[0];
let result;
let def;
let lowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppers = [
  "A",
  "b",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// NaN 속성은 Not-A-Number(숫자가 아님))
if (isNaN(num) == true) {
  // input의 타입이 숫자가 아닌 상태, 즉 문자인 경우

  //   해당 문자를 소문자로 변환
  let lowerCaseStr = str.toLowerCase();

  if (lowerCaseStr === str) {
    //해당 문자가 소문자인 경우
    def = Number(lowers.indexOf(str));
    result = 97 + def;
  } else if (lowerCaseStr !== str) {
    // 해당 문자가 대문자인 경우
    def = Number(uppers.indexOf(str));
    result = 65 + def;
  }
} else {
  // input의 타입이 숫자인 상태
  //   숫자는 48부터 시작
  result = 48 + num;
}
console.log(result);
