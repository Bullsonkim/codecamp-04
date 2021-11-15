// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.




function solution(phone_number) {
    let answer = '';
    
    
    for (let i=0; i <phone_number.length; i++) {
        // console.log(phone_number[i],i)
        if(i < phone_number.length -4) {
            answer = answer + '*'
        } else {
            answer = answer + phone_number[i]
        }
        
    }
        
    // console.log(answer)
    return answer;
}


//메서드 방식
function solution(phone_number) {
    let answer = "" 
    answer = answer.padStart(phone_number.length -4, "*")
    answer += phone_number.slice(phone_number.length-4, phone_number.length)
    
    return answer
    
}