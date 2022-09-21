let cons = [];
let res = [];

for (let i = 1; i <= 10000; i++) {
  let n = 0;
  let stringNumber = String(i);
  //n 값에 i의 각 자리 숫자 더하기
  for (let j = 0; j < stringNumber.length; j++) {
    n += Number(stringNumber[j]);
  }
  //n 값과 i 값 더하기
  let num = i + n;
  cons.push(num);
}

for (let i = 1; i <= 10000; i++) {
  // cons 배열에 찾는 문자열이 없을 경우 -1 이 나오는 것을 이용
  // cons 배열에 없는 숫자를 차례대로 res 배열에 삽입
  if (cons.indexOf(i) == -1) {
    res += i + "\n";
  }
}

console.log(res);
