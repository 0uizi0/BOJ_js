let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);

let b = input[1].split("");

let sum1 = num1*(parseInt(b[2])); //(3)
let sum2 = num1*(parseInt(b[1])); //(4)
let sum3 = num1*(parseInt(b[0])); //(5)
let total = sum1 + (sum2*10) + (sum3*100); //(6)

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(total);