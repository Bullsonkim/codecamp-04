import React from "react";
import * as S from "./BoardDetail.styles";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/youtube";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <FontAwesomeIcon icon={faUser} size="3x" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <hr />
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          <S.Youtube>
            <ReactPlayer
              url={props.data?.fetchBoard.youtubeUrl}
              width="468px"
              height="240px"
            />
          </S.Youtube>
        </S.Body>
        <S.IconWrapper>
          <S.LikeWrapper>
            <S.Likeicon onClick={props.onClickLike} />
            <S.LikeCount>{props.data?.fetchBoard.likeCount} </S.LikeCount>
          </S.LikeWrapper>
          <S.DisLikeWrapper>
            <S.Dislikeicon onClick={props.onClicekDisLike} />
            <S.DisLikeCount>
              {props.data?.fetchBoard.dislikeCount}
            </S.DisLikeCount>
          </S.DisLikeWrapper>
        </S.IconWrapper>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickFix}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
