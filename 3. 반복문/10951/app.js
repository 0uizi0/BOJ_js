// 이전 코드의 경우, 매번 console.log로 출력 => 시간초과를 받음.
// => 하나의 문자열에 결과값과 개행문자를 저장하여 마지막에 출력하도록 재설정

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
rl.on("line", (line) => {
  const input = line.split(" ");

  if (input.length === 2) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    result += a + b + "\n";
  }
}).on("close", () => {
  console.log(result);
  process.exit();
});

// 콘솔에서는 해당 코드 실행 시 입력만 계속 받음
// => close 이벤트에 걸리지 않았기 때문.
//     *rl.close()가 없을 경우, 무한으로 입력받음
// (그러나 백준에서는 이미 데이터 파일이 존재하기 때문에 자동으로 close되어 코드 종료)
