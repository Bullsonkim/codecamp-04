import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation} from "@apollo/client"
import { useState } from "react"
import {CREATE_BOARD} from './BoardWrite.queries' 
import {useRouter} from "next/router"

export default function BoardsNewPage() {
    const router = useRouter();
    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
    const [myCheck, setMyCheck] = useState(false);

    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");

    const[createBoard]=useMutation(CREATE_BOARD)
  
    function onChangeMyWriter(event) {
      
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }
      if (event.target.value !== "" &&  myPassword !=="" && myTitle !==""&& myContents !==""){
            setMyCheck(true);
        } else setMyCheck(false);
    }
  
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
            setMyPasswordError("");
      }
      if (event.target.value !== "" &&  myWriter !=="" && myTitle !==""&& myContents !==""){
            setMyCheck(true);
          } else setMyCheck(false);
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }
      if (event.target.value !== "" &&  myWriter !=="" && myPassword !==""&& myContents !==""){
            setMyCheck(true);
          } else setMyCheck(false);
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }
      if (event.target.value !== "" &&  myWriter !=="" && myPassword !==""&& myTitle !==""){
        setMyCheck(true);
        } else setMyCheck(false);
    }


    async function onClickSubmit() {
      if (myWriter === "") { // if(!myWriter)
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (myPassword === "") {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (myTitle === "") {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (myContents === "") {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "") {
            //if(myWriter)
        try{
            console.log(result)
            const result = await createBoard({
            variables: {createBoardInput: {writer:myWriter,
            password:myPassword,title:myTitle,contents:myContents}}             
        })
        // console.log(result)
        // // alert('게시물을 등록합니다!')
      

      router.push(`/createBoard/${result.data.createBoard._id} `) 

      }catch(error){
        console.log(error.message)
         }   
        //  return <BoardWriteUI /> 
      }
    }
        return (
            <BoardWriteUI 
            myWriter={onChangeMyWriter}
            myPassword={onChangeMyPassword}
            myContents={onChangeMyContents}
            myTitle={onChangeMyTitle}

            myWriterError={myWriterError}
            myPasswordError={myPasswordError}
            myTitleError={myTitleError}
            myContentsError={myContentsError}
            myClick={myCheck}

            myClick={onClickSubmit}

            myCheck={myCheck}
            
            />
        )
}
