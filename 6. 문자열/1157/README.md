# 문제

[1157번: 단어 공부](https://www.acmicpc.net/problem/1157)

# 풀이

## 코드 (1차)

```jsx
// 입력된 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");

// 중복된 배열 값의 개수 구하기
const result = [];
input.forEach((x) => {
  result[x] = (result[x] || 0) + 1; // ( true || false ) + 1
});

// 점 표기법 해체 && Key - Value
const { ...array } = result;
const keys = Object.keys(array);
const values = Object.values(array);

// 배열 result에 중복된 값이 있는지 확인하기
let hasDuplicates = new Set(values).size != values.length;

if (hasDuplicates) {
  console.log("?");
} else {
  // value가 최댓값인 key 구하기
  const max = Math.max(...values);
  const key = keys.find((key) => result[key] === max);
  console.log(key);
}
```

### 결과

- vscode : 에러 X
- BOJ : 에러 O

### 에러 원인

- 중복된 값이 있는 상태에서 가장 많이 사용된 알파벳이 존재하는 경우를 생각을 못해서 에러 발생
  ex) aabbccc (a와 b의 개수가 2개로 중복된 상태 && c의 개수가 3개로 최댓값임) ⇒ 현재 코드로는 ?가 나옴

### 풀이 방향

- `hasDuplicates === true` 인 상태에서 중복된 value로 이루어진 배열이 max의 값을 포함하는지 아닌지 구분하도록 설계
  - aabbccc : 중복된 value([2])는 max(3)의 값을 포함하지 않으므로 “C” 출력
  - aabbc : 중복된 value([2])는 max(2)의 값을 포함하므로 “?” 출력
  - aabbcccddd : 중복된 value([2,3])은 max(3)을 포함하므로 “?” 출력

## 코드(2차)

```jsx
// 입력된 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
// 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

// 값 입력받기
let fs = require("fs");
const filePath = process.platform == "linux" ? 0 : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");

// 중복된 배열 값의 개수 구하기
const result = [];
input.forEach((x) => {
  result[x] = (result[x] || 0) + 1; // ( true || false ) + 1
});

// 점 표기법 해체 && Key - Value
const { ...array } = result;
const keys = Object.keys(array);
const values = Object.values(array);

// 배열 result에 중복된 값이 있는지 확인하기
let hasDuplicates = new Set(values).size != values.length;

//최댓값
const max = Math.max(...values);

//중복된 values로 이루어진 배열 'duplicates'
const findDuplicates = (values) =>
  values.filter((item, index) => values.indexOf(item) !== index);
const duplicates = findDuplicates(values);

// value가 최댓값인 key 구하기
const key = keys.find((key) => result[key] === max);

if (hasDuplicates) {
  if (duplicates.includes(max)) {
    console.log("?");
  } else {
    console.log(key);
  }
} else {
  console.log(key);
}
```
