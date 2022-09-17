let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = Number(fs.readFileSync(filePath).toString());

// 연산할 때 주어진 수를 변경해야하므로 다른 변수에 할당
let num = input;
let sum;
let i = 0;

while (true) {
  //주어진 수이ㅡ 십의 자리 수와 일의 자리수에 더하여 새로운 수를 만듦
  sum = Math.floor(num / 10) + (num % 10);

  //주어진 수의 일의 자리수를 십의 자리수로 올리고, 새로운 수의 일의 자리 수를 합한다
  num = (num % 10) * 10 + (sum % 10);
  i++;

  if (input == num) {
    break;
  }

  //다음 반복에는 주어진 수 = 새로운 수, 새로운수 = 새로운 수2 가 됨.
  //이런 식으로 새로운 수 n이 될 것임.
}

console.log(i);
