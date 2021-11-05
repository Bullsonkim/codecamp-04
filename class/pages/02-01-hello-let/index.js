export default function HelloLetPage(){ //리액트 전용 HTML
    //스크립트 태그영역

    function zzz(){
        document.getElementById("qqq").innerText="반갑습니다" 
    }




    return(
        <>
            <div id="qqq">안녕하세요~</div>
            <button onClick={zzz}>버튼클릭!!</button>
            {/* 변수명은 문자열 / 자바스크립트는 중괄호 */}
        </>
    )

}