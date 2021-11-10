function solution(s) {
    if(s.length !== 4 && s.length !==6){
        return false
    }
   
    let answer = true;
    for (let i=0; i <s.length; i ++) {
        if(isNaN(s[i])===true) {
            //Number 타입으로 변환 했을때 문자열인경우 true 값을 반환
            // 숫자가 아니다
            answer = false;
            break;
            //반복문 강제 종료
        }
    
    }
    return answer;
}

 // function solution(s) {
 //     if(s.length !== 4 && s.length !==6){
 //         return false
 //    }
 //     const answer = s.split("")
 //         .filter( num => {
 //         //데이터가 숫자가 아닌 문자타입만 남긴다
 //         //Nan 값인 데이터만 남긴다
 //         retrun isNaN(num)
 //     })
 //    return answer.length === 0
 // }