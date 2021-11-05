export default function CounterLetPage(){ //리액트 전용 HTML
    //스크립트 태그영역

    function zzz(){
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("qqq").innerText = token

    }
    return(
        <>
            <div id="qqq">0000000</div>
            <button onClick={zzz}>인증번호생성</button>
            {/* 변수명은 문자열 / 자바스크립트는 중괄호 */}
        </>
    )
}