import {useState} from 'react' // react에서 state를 가져옴
export default function CounterStatePage(){ //State 전용 HTML

    const [qqq,setQqq] = useState("0")

    function zzz() {
        setQqq(Number(qqq)+1)
        //다이렉트로 {qqq}에 자동 연결
    }


    return(
        <>
            <div>{qqq}</div>
            {/* 자바스크립트 기능은 중괄호 */}
            <button onClick={zzz}>카운트증가@@</button>
        </>
    )

}