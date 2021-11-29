import {
  Wrapper,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  Row,
  ColumnBasic,
  ColumnTitle,
  Button,
  PencilIcon,
  ColumnWriter,
} from "./MyfirebaseList.styles";
import { IMyfirebaseListUIProps } from "./MyfirebaseList.types";
import { getDate } from "../../../../commons/libraries/utils";

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <Wrapper>
      {/* <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderBasic>제목</ColumnHeaderBasic>
        <ColumnHeaderTitle>내용</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
      </Row> */}
      {props.dataBoards?.map((el: any, index: number) => (
        <Row key={index}>
          {/* <ColumnBasic>{index + 1}</ColumnBasic> */}
          <ColumnWriter>{el.writer}</ColumnWriter>
          <ColumnBasic>{el.title}</ColumnBasic>
          <ColumnTitle>{el.contents}</ColumnTitle>
          {/* <Date>{getDate(el.createdAt)}</Date> */}
        </Row>
      ))}
      <Button onClick={props.onClickMoveToBoardNew}>
        <PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </Button>
    </Wrapper>
  );
}
