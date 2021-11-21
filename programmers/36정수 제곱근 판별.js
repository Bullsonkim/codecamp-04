// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

//for문
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      //제곱근을 찾은 경우 (제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;
    }
  }
  //제곱근 찾지 못한경우 (-1리턴)
  return answer;
}

//While문
function solution(n) {
  let num = 1;
  while (num * num < n) {
    num++;
  }

  return num * num === n ? (num + 1) * (num + 1) : -1;
}

//매서드
function solution(n) {
  let sqrt = Math.sqrt(n); //제곱근 구하는 함수
  if (Number.isInteger(sqrt) === true) {
    //제곱근일경우 (정수) true 반환
    sqrt++;
    return sqrt * sqrt;
  } else {
    retrun - 1;
  }
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n))
    ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
    : -1;
}
