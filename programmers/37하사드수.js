// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  //자릿수의 합 총값을 저장
  let sum = 0;
  //숫자타입 x값을 문자열 타입으로 변환
  x = String(x);

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0 ? true : false;
}

function solution(x) {
  let sum = 0;
  //String(x) 동일작동
  const temp = x
    .toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });
  return x % sum === 0 ? true : false;
}

//매서드
function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
  return x % sum === 0 ? true : false;
}
