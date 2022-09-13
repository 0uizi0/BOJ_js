let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < t; i++) {
  let a = Number(numbers[i][0]);
  let b = Number(numbers[i][1]);
  console.log("Case #" + (i + 1) + ": " + (a + b));
}
