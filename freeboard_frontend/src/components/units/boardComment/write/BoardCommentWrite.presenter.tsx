import {
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Input,
  InputWrapper,
  Wrapper,
  WrapperTop,
  Title,
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <WrapperTop>
          <FontAwesomeIcon icon={faComment} size="3x" flip="horizontal" />
          <Title>댓글</Title>
        </WrapperTop>
      )}
      <InputWrapper>
        <Input
          placeholder="작성자"
          readOnly={Boolean(props.el?.writer)}
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeMyWriter}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeMyPassword}
        />

        <Rate onChange={props.starChange} value={props.star} />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          maxLength={100}
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>{props.myContents.length}/100</ContentsLength>
          <Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
