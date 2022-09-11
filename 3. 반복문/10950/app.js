let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = Number(input[0]);
let numbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 1; i <= count; i++) {
  let a = Number(numbers[i][0]);
  let b = Number(numbers[i][1]);
  console.log(a + b);
}
