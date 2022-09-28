let fs = require("fs");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let numbers = input[1];
let sum = 0;
const arr = numbers.split("");

for (let i = 0; i < n; i++) {
  sum += Number(arr[i]);
}

console.log(sum);
