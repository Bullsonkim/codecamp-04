import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation} from "@apollo/client"
import { ChangeEvent, useState } from "react"
import{CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries' 
import { useRouter } from "next/router"
import {IBoardWriteUIProps} from "./BoardWrite.types"



export default function BoardWrite(props: IBoardWriteUIProps){
    const router = useRouter()

    const[myQqq, setMyQqq] = useState<boolean>(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const[createBoard]=useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    function onChangeMywriter(event: ChangeEvent<HTMLInputElement>){
        setMyWriter(event.target.value)
        if (event.target.value !== "" && myTitle !=="" && myContents !=="") {
                setMyQqq(true)
                }
    }

    function onChangeMytitle(event: ChangeEvent<HTMLInputElement>){
        setMyTitle(event.target.value)
        if (myWriter !== "" && event.target.value !=="" && myContents !=="") {
            setMyQqq(true)
            }
    }

    function onChangeMyContents(event: ChangeEvent<HTMLInputElement>){
        setMyContents(event.target.value)
        if (myWriter !== "" && myTitle !=="" && event.target.value !=="") {
            setMyQqq(true)
            }
    }
//이벤트 속성 검색해서 찾을 필요

    async function zzz(){
        try {
            const result = await createBoard({
            variables: {writer:myWriter, title: myTitle, contents:myContents} //상단 $로 값을 받음
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        router.push(`/09-02-boards2/${result.data.createBoard.number}` )
    } catch(error) {
        alert('에러입니다')
    }
    }

    async function xxx(){ //수정된 값만 가져오기
        interface IMyVariables {
            number: number,
            writer?: string,
            title?: string,
            contents?: string
        }


        const myVaribles: IMyVariables = {
            number: Number(router.query.myNumber)
            }

            if(myWriter !=="") myVaribles.writer = myWriter     
            if(myTitle !=="") myVaribles.title = myTitle
            if(myContents !=="")myVaribles.contents = myContents
            

       
        // alert ("수정하기 버튼을 누르셨습니다!")
        const result = await updateBoard({
            variables: myVaribles
        })
        console.log(result)
        router.push(`/09-02-boards2/${router.query.myNumber}` )
    }

    

    return(
        <BoardWriteUI 
        aaa={onChangeMywriter}
        bbb={onChangeMytitle}
        ccc={onChangeMyContents}
        zzz={zzz}
        qqq={myQqq}
        ggg={props.isEdit}
        xxx={xxx}
        data={props.data}
        />
    )
}