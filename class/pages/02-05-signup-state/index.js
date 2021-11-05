import{useState} from 'react'

export default function SignupStatePage() {

    const [email, setEmail] =useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")

    function aaa(event) { //on으로 시작되는 속성에는 괄호안에 event
        //event.target //<input type="text" onChange={aaa}/>  태그 전체를 가져옴      
        setEmail(event.target.value)
    }
    
    function bbb(event) {
        setPassword(event.target.value) // password 변경할 떄마다 실행
    }

    function ccc() {
        console.log('email:', email)
        console.log('password', password)

        if(email.includes("@") === false){
            // alert("이메일에 @가 없습니다. 잘못된 이메일 입니다!!")
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일 입니다!!")
        }

    }


    return(
        <div>
            이메일입력: <input type="text" onChange={aaa}/> <br />
            {/* onChange 한번 누를때마다 변경 */}
            <div>{emailError}</div>
            비밀번호입력: <input type="password" onChange={bbb}/> <br />
            <button onClick={ccc}>회원가입</button>
        </div>
    )
    
}