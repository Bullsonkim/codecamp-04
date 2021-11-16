import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  BestWriter,
  BestTitle,
  Bestlike,
  BestDate,
  WrapperBest,
  Bestbackground,
  MyTitle,
  WrapperLeft,
  WrapperRight,
  BestPicture,
  WrapperGroup,
  LikePicture,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <MyTitle>베스트 게시글 </MyTitle>
      <WrapperBest>
        {props.bestdata?.fetchBoardsOfTheBest.map((el) => (
          <Bestbackground>
            <BestPicture>사진</BestPicture>

            <WrapperGroup>
              <WrapperLeft>
                <BestTitle>{el.title}</BestTitle>
                <BestWriter>{el.writer}</BestWriter>
                <BestDate>{getDate(el.createdAt)}</BestDate>
              </WrapperLeft>
              <WrapperRight>
                <LikePicture>like</LikePicture>
                <Bestlike>{el.likeCount}</Bestlike>
              </WrapperRight>
            </WrapperGroup>
          </Bestbackground>
        ))}
      </WrapperBest>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}