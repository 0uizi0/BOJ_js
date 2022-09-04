let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let count = input[0];
let numbers = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

let num1 = Number(numbers[0][0]);
let num2 = Number(numbers[0][1]);
var sum = num1*num2;
console.log(sum);

if (sum != ''){
    let num1 = Number(numbers[1][0]);
    let num2 = Number(numbers[1][1]);
    var sum = num1*num2;
    console.log(sum);
}