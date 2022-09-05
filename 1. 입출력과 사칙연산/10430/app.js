let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

//입력값 a,b,c
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

var output1 = (a+b)%c;
var output2 = ((a%c)+(b%c))%c;
var output3 = (a*b)%c;
var output4 = ((a%c)*(b%c))%c;

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);