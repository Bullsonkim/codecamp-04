import { useMutation,gql } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`

    mutation createBoard ($writer:String, $title:String, $contents:String){

        createBoard (writer: $writer, title: $title, contents: $contents){
                _id
                number
                message
            }
            
    }    
`

export default function GraphqlMutationBoard3Page(){
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const[createBoard]=useMutation(CREATE_BOARD)

    function onChangeMywriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMytitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }


    async function zzz(){
        const result = await createBoard({
            variables: {writer:myWriter, title: myTitle, contents:myContents} //상단 $로 값을 받음
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    return(
        <div>
            작성자: <input type="text" onChange={onChangeMywriter} /> <br />
            제목: <input type="text" onChange={onChangeMytitle}/> <br />
            내용: <input type="text" onChange={onChangeMyContents} /> <br />
            <button onClick={zzz}>게시물 등록하기!!</button>
        </div>
    )


}