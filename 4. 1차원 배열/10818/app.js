let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let numbers = input[1].split(" ").map((x) => Number(x));

numbers.sort((a, b) => a - b);

console.log(numbers[n - n], numbers[n - 1]);
