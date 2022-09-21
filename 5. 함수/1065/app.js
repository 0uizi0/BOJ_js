let fs = require("fs");
const { nextTick } = require("process");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let count = 0;

for (let i = 1; i <= input; i++) {
  // n : 한 자리 수 혹은 두 자리 수
  if (i < 100) {
    count++;
  }
  // n : 세 자리 수
  else {
    let num = String(i);
    let diff1 = num[0] - num[1];
    let diff2 = num[1] - num[2];
    if (diff1 == diff2) {
      count++;
    }
  }
}

console.log(count);
