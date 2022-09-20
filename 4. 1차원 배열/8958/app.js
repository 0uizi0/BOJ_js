let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = [];
let result;
let arr;
let str;
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 1; i < numbers.length; i++) {
  str = numbers[i];
  arr = [...str[0]];

  for (let j = 0; j < arr.length; j++) {
    result = arr[j];
    if (result == "O") {
      sum += 1;
      for (let k = j + 1; k < arr.length; k++) {
        if (result == arr[k]) {
          sum += 1;
        } else {
          break;
        }
      }
    } else {
      sum += 0;
    }
  }
  console.log(sum);
  sum = 0;
}
