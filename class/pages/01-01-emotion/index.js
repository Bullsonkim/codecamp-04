import {MyDiv, MyInput} from '../../styles/emotion.js'
//콘솔 명령어로 불러올 파일 위치 찾고 선언한 태그 적용


export default function EmotionPage(){
// 자바스크립트쓰는곳 함수를 페이지에 내보내 기위해 export




    return(
// 리엑트전용 thml쓰는곳(jsx) 2줄이상 입력하려면 ()필수 한줄은 생략가능       
        <>
        <MyDiv>로그인</MyDiv>
        <div>아이디 </div><br />
        <MyInput type="text"/> <br />
        <div>비밀번호</div> <br /> 
        <MyInput type="text"/>  
        <div>비밀번호</div>: <img src="/images/lotto.png" />
       </>
// 2줄이상 입력 시 div or <>(Fragment)로 감싸줌
    )
}