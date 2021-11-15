import React from "react";
import * as S from "./BoardDetail.styles";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

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
          =
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <hr />
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
        </S.Body>
        <S.IconWrapper>
          <S.Likeicon />
          <S.Dislikeicon />
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
