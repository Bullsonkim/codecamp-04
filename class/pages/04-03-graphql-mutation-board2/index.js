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
// 여러 값을 뿌릴경우를 대비한 구조
`

export default function GraphqlMutationBoard2Page(){
        const[aaa,setAaa] = useState("안녕하세요!")

        const[createBoard]=useMutation(CREATE_BOARD)

    async function zzz(){
        const result = await createBoard({
            variables: {writer:"영희", title: "제목이요!!", contents:"내용이요!"} //상단 $로 값을 받음
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    return(
        <>
        <div>{aaa}</div>
        <button onClick={zzz}>GRAPHQL-API 요청하기!!!</button>
        </>

    )


}