let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = input[0];
let numbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

let h = Number(numbers[0][0]);
let m = Number(numbers[0][1]);
let addTime = Number(numbers[1]);

if (m + addTime >= 60) {
  h = h + parseInt((m + addTime) / 60);
  m = parseInt((m + addTime) % 60);

  if (h >= 24) {
    h = h - 24;
  }
} else {
  m = parseInt(m + addTime);
}

console.log(h, m);
