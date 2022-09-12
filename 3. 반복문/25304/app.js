let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let receiptSum = Number(input[0]);
let receiptKind = Number(input[1]);
let numbers = [];
let totalSum = 0;

for (let i = 2; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < receiptKind; i++) {
  let price = numbers[i][0];
  let number = numbers[i][1];
  totalSum = totalSum + price * number;
}

if (receiptSum == totalSum) {
  console.log("Yes");
} else {
  console.log("No");
}
