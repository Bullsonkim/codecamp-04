import axios from 'axios' //   액시오스 요청
import {useState} from 'react'

export default function RestGetPage() {

    const [aaa,setAaa] = useState("")
    
    // const zzz = async() => {
    //      await axios.get('')
    //  }
    // 화살표 함수 문법
    
    async function zzz(){
        const result = await axios.get('https://koreanjson.com/users')
        console.log(result)
        // console.log(result.data.name)

        // setAaa(result.data.name)
    }

    return (
        <div>
            <div>{aaa}</div>
            <button onClick={zzz}>REST-API 요청하기!!</button>
        </div>
    )
    
}