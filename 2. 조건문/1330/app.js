//입력값
let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a>b){
    console.log(">");
}
else if (a<b){
    console.log("<");
}
else {
    console.log("==");
}