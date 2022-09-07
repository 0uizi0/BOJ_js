//입력값
let fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let score = parseInt(input[0]);

if (score>=90&&score<=100){
    var grade = "A"
}
else if (score>=80&&score<90){
    var grade = "B"
}
else if (score>=70&&score<80){
    var grade = "C"
}
else if (score>=60&&score<70){
    var grade = "D"
}
else {
    var grade = "F"
}

console.log(grade);