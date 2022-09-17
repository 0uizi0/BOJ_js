let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let result;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let a = Number(numbers[i][0]);
  let b = Number(numbers[i][1]);
  let result = a + b;

  if (result == 0) {
    break;
  }

  console.log(result);
}
