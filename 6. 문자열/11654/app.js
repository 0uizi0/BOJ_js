let fs = require("fs");
const { type } = require("os");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let str = input.toString();
// charCodeAt() : 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 바환하는 메서드
const answer = str.charCodeAt();
console.log(answer);
