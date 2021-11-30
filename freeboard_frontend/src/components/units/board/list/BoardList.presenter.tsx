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
  TextToken,
  WrapperBest,
  MyTitle,
  Bestbackground,
  BestPicture,
  WrapperGroup,
  WrapperLeft,
  BestTitle,
  BestWriter,
  BestDate,
  WrapperRight,
  LikePicture,
  Bestlike,
} from "./BoardList.styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbar from "../../../commons/search/Search.container";
import { v4 as uuidv4 } from "uuid";
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
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </TextToken>
              ))}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Searchbar
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
