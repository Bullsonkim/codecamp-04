// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

//for문 정답

function solution(n){   
    let answer=0;
    n = String(n);
    
    for(let i=0;i < n.length;i++){
        answer += Number(n[i]);
    }
  
    return answer;
}


// function solution(n){   
//     let answer=0;
//     String(n).split("")
//                 .forEach (num =>{ answer += Number(num);})
// }


//n의 값을 typeof로 자료형 파악
//숫자 > 문자 타입으로 변환 - 문자열로 따로 받아서 더하기 위함
//string("123") 변수 선언을 하지 않아도 변환가능
//123.toString() 변수 선언을 하여 사용하여야함
//문자열로 분리후 숫자타입으로 변환하여 더해줌




