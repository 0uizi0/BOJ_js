let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

a = Number(input[0]);
b = Number(input[1]);
c = Number(input[2]);

var result;

if (a == b && b == c) {
  result = 10000 + a * 1000;
} else if ((a == b && a != c) || (a == c && a != b)) {
  result = 1000 + a * 100;
} else if (b == c && a != b) {
  result = 1000 + b * 100;
} else {
  if (a > b && a > c) {
    result = a * 100;
  } else if (b > a && b > c) {
    result = b * 100;
  } else {
    result = c * 100;
  }
}

console.log(result);
