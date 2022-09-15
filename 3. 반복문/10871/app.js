let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let numbers = [];
let results = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

let x = Number(numbers[0][1]);

for (let i = 0; i < numbers[1].length; i++) {
  if (numbers[1][i] < x) {
    results.push(Number(numbers[1][i]));
  }
}
let result = results.join(" ");
console.log(result);
