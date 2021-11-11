import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useState,ChangeEvent } from 'react'
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/router'
import {IBoardWriteProps} from "./BoardWrite.types"

export default function BoardWrite(props:IBoardWriteProps){
    const router = useRouter()

    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
  
    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");
  
    const [isActive, setIsActive] = useState(false)

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
  
    function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }

      if(event.target.value !== "" && myTitle !== "" && myContents !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }

      if(myWriter !== "" && myTitle !== "" && myContents !== "" && event.target.value !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }

      if(myWriter !== "" && event.target.value !== "" && myContents !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyContents(event: ChangeEvent<HTMLTextAreaElement>) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }

      if(myWriter !== "" && myTitle !== "" && event.target.value !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    async function onClickSubmit() {
      if (!myWriter) {
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (!myPassword) {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (!myTitle) {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (!myContents) {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter && myPassword && myTitle && myContents) {
        const result = await createBoard({ 
          variables: { 
            createBoardInput: { 
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents
            }
          }
        });
        router.push(`/boards/${result.data.createBoard._id}`)
      }
    }

    async function fixBtn(){
      // alert ("수정하기 버튼을 누르셨습니다!")
      const result = await updateBoard({
          variables: {UpdateBoardInput:{
              title: myTitle,
              contents: myContents
            }, password: myPassword,
            boardId: router.query.boardId
          }
      });
      console.log(result)
      router.push(`/boards/${router.query.boardId}` )
    }

    return (
        <BoardWriteUI
          myWriterError={myWriterError}
          myPasswordError={myPasswordError}
          myTitleError={myTitleError}
          myContentsError={myContentsError}
          onChangeMyWriter={onChangeMyWriter}
          onChangeMyPassword={onChangeMyPassword}
          onChangeMyTitle={onChangeMyTitle}
          onChangeMyContents={onChangeMyContents}
          onClickSubmit={onClickSubmit}
          isActive={isActive}

          rf={props.isEdit}
          fixBtn={fixBtn}

        />
    )
}