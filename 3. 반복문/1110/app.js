let fs = require("fs");
const { formatWithOptions } = require("util");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let a;
let sum;
let count;

while (true) {
  if (Number(input[0]) < 10) {
    a = "0" + input[0];
  } else {
    a = input[0];
  }

  let t = parseInt(Number(a) / 10);
  let o = parseInt(Number(a) % 10);
  sum = t + o;

  if (sum !== a) {
    count = count + 1;

    if (sum < 10) {
      a = "0" + sum;
    } else {
      a = sum;
    }

    let t = parseInt(Number(a) / 10);
    let o = parseInt(Number(a) % 10);

    sum = t + o;
  } else {
    break;
  }
}

console.log(count);
