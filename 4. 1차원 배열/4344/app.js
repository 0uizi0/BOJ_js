let fs = require("fs");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let result;
let arr;
let str;
let sum = 0;
let cnt = 0;
let n;
let percent;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 1; i < numbers.length; i++) {
  str = numbers[i];
  arr = [...str];
  n = Number(arr[0]);

  for (let j = 1; j < arr.length; j++) {
    sum += Number(arr[j]);
  }
  result = sum / n;

  for (let j = 1; j < arr.length; j++) {
    if (Number(arr[j]) > result) {
      cnt++;
    }
  }

  percent = (cnt / n) * 100;
  console.log(percent.toFixed(3) + "%");

  sum = 0;
  result = 0;
  cnt = 0;
}
