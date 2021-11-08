import {
    Background,
    Writer,
    Title,
    Contents,
    WrapperContents,
    WrapperWriter,
    MyImg,
    MyVideo,
    WrapperMedia,
    MyLike,
    MyDislike,
    WrapperlikeDislike

  } from "../../../styles/board_result";


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faSmileBeam,faTired } from "@fortawesome/free-solid-svg-icons";




import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD= gql`
query fetchBoard($boardId : ID!) {
    fetchBoard(boardId : $boardId){
        _id
        writer
        title
        contents
    }
  }
`



export default function DynamicProductReadPage(){

       const router = useRouter() 
        const {data} = useQuery(FETCH_BOARD, {
            variables:{boardId:router.query.create}
        })
            console.log(data)

        return(
            <Background>
           
            {/* <div>게시판 ID: {router.query.create}</div> */}

            <WrapperWriter>
            <FontAwesomeIcon icon={faUserCircle} size="5x"  />
                <Writer>작성자 {data && data.fetchBoard.writer}</Writer>
            </WrapperWriter>
            
            <WrapperContents>
                   <Title>제목: {data && data.fetchBoard.title} </Title>
                    <hr width="90%" />
                    <Contents>상세내용: {data?.fetchBoard.contents}</Contents>
                
            </WrapperContents>

            <WrapperMedia>
               <MyImg >이미지 영역</MyImg>
               <MyVideo>비디오 영역</MyVideo>
            </WrapperMedia>


            <WrapperlikeDislike>
                <FontAwesomeIcon icon={faSmileBeam} size="3x" color="white"/>
                <MyLike>좋아요!</MyLike>
                <FontAwesomeIcon icon={faTired} size="3x" color="white"/>
                <MyDislike>싫어요!</MyDislike>
             </WrapperlikeDislike>
           
            




            </Background>
        )

}