let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
