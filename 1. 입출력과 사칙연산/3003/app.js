//입력값
let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

//기본 세팅
var setting = new Array();
var setting = [1,1,2,2,2,8];

//출력
var output = new Array();

for (var i=0; i<setting.length;i++){
    output.push(setting[i]-input[i]);
}

console.log(output.join(" "));