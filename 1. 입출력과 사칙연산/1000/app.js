// 컴퓨터에서는 input.txt 파일을 읽어오고, 
// 백준에서는 '/dev/stdin'에서 읽어올 수 있도록 설정
const fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
var input = fs.readFileSync(filePath).toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);