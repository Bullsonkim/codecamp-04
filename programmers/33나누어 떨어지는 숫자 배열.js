// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

function solution(arr, divisor) {
    const answer = [];
    
    for (let i=0; i <arr.length; i++){
        if (arr[i] % divisor===0){
            answer.push(arr[i])
        }
    }
    // 빈 배열의 경우 조건식으로 삼항 연산자 사용
    // 빈 배열의 경우 배열에 -1을 담아서 리턴
    return answer.length === 0 
        ? [-1]
       : answer.sort((a,b) => a - b)// 데이터가 있을 경우 오름차순으로 정렬해서 리턴
}



//매서드 풀이

function solution(arr, divisor) {
    
    return arr.filter(num =>{
        retrun num % divisor ===0
    })
    return length === 0
        ?[-1]
        : answer.sort((a,b) => a-b)

}

