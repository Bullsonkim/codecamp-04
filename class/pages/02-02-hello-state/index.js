import {useState} from 'react' // react에서 state를 가져옴
export default function HelloLetPage(){ //State 전용 HTML

    const [qqq,setQqq] = useState("안녕하세요")

    function zzz() {
        setQqq("반갑습니다")
    }


    return(
        <>
            <div>{qqq}</div>
            {/* 자바스크립트 기능은 중괄호 */}
            <button onClick={zzz}>버튼클릭!!</button>
        </>
    )

}