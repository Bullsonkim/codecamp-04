import { useMutation,gql } from "@apollo/client"
import { useState } from "react"
import { MyInput } from "../../src/components/units/board/write4/BoardWrite.styles"

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

    const [myInputs, setMyInputs] = useState({
        writer:"",
        title:"",
        contents:""

    })

    // const [myWriter, setMyWriter] = useState("")
    // const [myTitle, setMyTitle] = useState("")
    // const [myContents, setMyContents] = useState("")

    const[createBoard]=useMutation(CREATE_BOARD)

    function onChangeMyInputs(event){
        setMyInputs({
            ...myInputs,
            [event.target.id]:event.target.value,
        })
//키에 대괄호는 변수로 선언한다는 의미
//똑같은 키 무시되고 가장 아래에 있는 값이 덮어씀
        // setMyInputs({
        //     writer: myInputs.writer,
        //     title: myInputs.title,
        //     contents: myInputs.contents,
        //     [event.target.id]: event.target.value,
        // })
    }

}
    

    // function onChangeMywriter(event){
    //     setMyWriter(event.target.value)
    // }

    // function onChangeMytitle(event){
    //     setMyTitle(event.target.value)
    // }

    // function onChangeMyContents(event){
    //     setMyContents(event.target.value)
    // }


    async function zzz(){
        const result = await createBoard({
            variables: {...myInputs}, //상단 $로 값을 받음
        })
        console.log(result)
        console.log(result.data.createBoard.message);
    }

    return(
        <div>
            작성자: <input type="text" name="writer" onChange={onChangeMyInputs} /> <br />
            제목: <input type="text" name="title" onChange={onChangeMyInputs}/> <br />
            내용: <input type="text" name="contents" onChange={onChangeMyInputs} /> <br />
            <button onClick={zzz}>게시물 등록하기!!</button>
        </div>
    )


}