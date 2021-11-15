// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
// solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고
//  "1234"라면 True를 리턴하면 됩니다.




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

 function solution(s) {
     if(s.length !== 4 && s.length !==6){
         return false
    }
     const answer = s.split("")
         .filter( num => {
         //데이터가 숫자가 아닌 문자타입만 남긴다
         //Nan 값인 데이터만 남긴다
         retrun isNaN(num)
     })
    return answer.length === 0
 }