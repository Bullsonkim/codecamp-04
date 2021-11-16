// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
  let answer = [];
  //숫자타입 데이터 문자열 타입으로 변환 숫자 하나하나를 가져오기위함

  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}

//역 반복문 방식
function solution(n) {
  var answer = [];
  //숫자타입 데이터 문자열 타입으로 변환 숫자 하나하나를 가져오기위함

  n = String(n);
  //최초식: n의 length 값이 5를 가지면 최초 인덱스값은 4부터 시작
  //조건식: 인덱스의 0번쨰 까지 (0번째 포함)
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }

  return answer;
}

//매서드 방식
function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });
  return answer;
}
