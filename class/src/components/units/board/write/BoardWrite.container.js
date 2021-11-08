import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation} from "@apollo/client"
import { useState } from "react"
import{CREATE_BOARD} from './BoardWrite.queries' 




export default function BoardWrite(){

    const[myQqq, setMyQqq] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const[createBoard]=useMutation(CREATE_BOARD)

    function onChangeMywriter(event){
        setMyWriter(event.target.value)
        if (event.target.value !== "" && myTitle !=="" && myContents !=="") {
                setMyQqq(true)
                }
    }

    function onChangeMytitle(event){
        setMyTitle(event.target.value)
        if (myWriter !== "" && event.target.value !=="" && myContents !=="") {
            setMyQqq(true)
            }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if (myWriter !== "" && myTitle !=="" && event.target.value !=="") {
            setMyQqq(true)
            }
    }


    async function zzz(){
        const result = await createBoard({
            variables: {writer:myWriter, title: myTitle, contents:myContents} //상단 $로 값을 받음
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }


    return(
        <BoardWriteUI 
        aaa={onChangeMywriter}
        bbb={onChangeMytitle}
        ccc={onChangeMyContents}
        zzz={zzz}
        qqq={myQqq}
        />
    )
}