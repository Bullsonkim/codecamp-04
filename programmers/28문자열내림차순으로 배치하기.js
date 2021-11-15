// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.



function solution(s) {
    const answer = [];
    
    for(let i = 0; i <s.length; i++){
        answer.push(s[i])
    }
    answer.sort ((a,b) =>{
       return  a >b ? -1 : 1
    })
    
    return answer.join("");
}



function solution(s) {
     const answer = s.split("")
                    .sort((a,b) =>{
                        return a > b ? -1 : 1
                    }).join("")
     return answer;
}




//알파벳도 순서로 비교할수 있음
//"b" > "a" true
//"z" > "A" true
//"Z" > "a" false 대문자는 소문자보다 작음
//sort() 오름차순 기본값 배열에서만 사용 

//sort(a,b) a 두번쨰값/ b 첫번쨰값
//join 배열을 문자열로만들어줌


