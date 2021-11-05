export default function CounterLetPage(){ //리액트 전용 HTML
    //스크립트 태그영역

    function zzz(){
        const bbb = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = bbb



    }
    return(
        <>
            <div id="qqq">0</div>
            <button onClick={zzz}>카운트증가!!</button>
            {/* 변수명은 문자열 / 자바스크립트는 중괄호 */}
        </>
    )
}
