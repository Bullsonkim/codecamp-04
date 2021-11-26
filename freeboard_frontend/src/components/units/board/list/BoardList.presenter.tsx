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
  PageWrapper,
  Pagelist,
  NextPage,
  PrevPage,
  PageNum,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <MyTitle>베스트 게시글 </MyTitle>
      <WrapperBest>
        {props.bestdata?.fetchBoardsOfTheBest.map((el) => (
          <Bestbackground>
            <BestPicture>사진</BestPicture>

            <WrapperGroup onClick={props.onClickMoveToBoardDetail}>
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
      {props.pagedata?.fetchBoards.map((el, index) => (
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

      <PageWrapper>
        <PrevPage
          onClick={props.onClickPrevPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          ◀️
        </PrevPage>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && ( // 마지막 페이지보다 큰 페이지 번호는 안보이게 처리
              <Pagelist
                key={props.startPage + index}
                onClick={props.onClickPage}
                id={props.startPage + index}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {props.startPage + index}
              </Pagelist>
            )
        )}

        <NextPage
          onClick={props.onClickPrevPage}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          ▶️
        </NextPage>
      </PageWrapper>
    </Wrapper>
  );
}
