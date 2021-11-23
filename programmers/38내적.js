// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

function solution(a, b) {
  const answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

//매서드
function solution(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);
}

// num -> 배열의 요소, i ->요소가 가지는 인덱스값

// map 제거 ver
function solution(a, b) {
    const answer = a.reduce ((el,cu,i)=>{
        return el + (cu * b[i]);
    },0)
  }
  