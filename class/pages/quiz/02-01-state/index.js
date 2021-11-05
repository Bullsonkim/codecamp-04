import{useState} from 'react'

export default function SignupStatePage() {

    const [num, setNum]=useState("000000")
  
    
    function random() {
        setNum(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
    }

    return(
        <>
        <div>{num}</div>
        <button onClick={random}>인증번호전송</button>
        </>

    )

}