let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0]);
let result = 0;

for (let i = 1; i <= a; i++) {
  result += i;
}

console.log(result);
