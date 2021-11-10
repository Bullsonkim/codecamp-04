function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if(n%i ===0){
              //n을 i로 나눴을떄 나머지 값이0이면 약수로 판단
            answer +=i    
        }
    }
    
    return answer;
}
//     function solution(n) {
//      let answer = 0;
       
//         new Arry(n)
//             .fill(1)
//             .forEach((num, i) =>{
//             //배열에서 순수하게 반복문만 돌수 있게 도움 <For문> 필터 사용불가
//                 if(n % (num+i)===0){
//                     answer +=(num +i)
//                 }
//         }) 
//      return answer;
// }