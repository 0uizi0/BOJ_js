# 문제

[1152번: 단어의 개수](https://www.acmicpc.net/problem/1152)

# 풀이

## 코드 (1차)

```jsx
// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split(" ");

console.log(input.length);
```

### 결과

- vscode : 에러 X
- BOJ : 에러 O

### 에러 원인

- 입력받은 문자열이 `‘’`일 때 하나의 단어로 인식<br>
  ⇒ input이 [”’’”] 으로 출력되어, input.length는 1이 됨.<br>
  ⇒ 0이 될 수 있도록 조정 필요

### 풀이 방향

- if-else 문으로 예외 상황 해결

## 코드(2차)

```jsx
// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split(" ");

if (input[0] === "") {
  console.log(0);
} else {
  console.log(input.length);
}
```
