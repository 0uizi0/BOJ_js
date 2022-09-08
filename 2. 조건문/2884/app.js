let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (m - 45 >= 0) {
  console.log(h + " " + (m - 45));
} else {
  if (h - 1 < 0) {
    h = h + 24;
  }
  console.log(h - 1 + " " + (m + 15));
}
