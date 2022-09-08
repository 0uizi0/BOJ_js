let fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (x > 0 && y > 0) {
  var result = 1;
} else if (x > 0 && y < 0) {
  var result = 4;
} else if (x < 0 && y > 0) {
  var result = 2;
} else if (x < 0 && y < 0) {
  var result = 3;
}

console.log(result);
