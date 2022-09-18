let fs = require("fs");
const { runInContext } = require("vm");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let num;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    num = input[i].split(" ").map((x) => Number(x));
    numbers.push(num);
  }
}

const result = [];

for (let i = 0; i < 9; i++) {
  result.push(...numbers[i]);
}

array = [...result]; //deep copy(한 쪽의 수정으로 다른 쪽에 영향 없음)

result.sort((a, b) => b - a);

let max = result[0];
let sequence = array.indexOf(max) + 1;
console.log(max, sequence);
