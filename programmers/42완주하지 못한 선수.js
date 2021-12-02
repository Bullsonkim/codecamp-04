// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
  participant.sort(); //참가자 명단 오름차순 정렬
  completion.sort(); // 완주자 명단 오름차순 정렬

  // let answer = '';
  for (let i = 0; i < participant.lenght; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
      //break쓰지않고 바로 리턴
      // answer = participant[i];
      // console.log(participant[i],completion[i], answer)
      // break;
      // 참가자 명단과 완주자 명단을 비교했을떄
      // 완주자 명단에 없는 참가자를 찾은 후 바로 반복문 종료
    }
  }
  // return answer;
}

//매소드
function solution(participant, completion) {
  participant.sort(); //참가자 명단 오름차순 정렬
  completion.sort(); // 완주자 명단 오름차순 정렬

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
