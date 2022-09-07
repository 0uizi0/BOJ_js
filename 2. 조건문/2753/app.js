//입력값
let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let y = parseInt(input[0]);

if ((((y%4)==0)&&((y%100)!=0))||((y%400)==0)){
    console.log(1);
}
else {
    console.log(0);
}