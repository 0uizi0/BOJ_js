let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let n = input[0].split(" ").map((x) => Number(x));
let num;
let value;
let sum = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    num = input[i].split(" ").map((x) => Number(x));
  }
}

num.sort((a, b) => b - a);

let max = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] !== "") {
    value = (num[i] / max) * 100;
    numbers.push(value);
    sum += numbers[i];
  }
}

console.log(sum / n);
