import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PagenationBasicPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });

  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;
  // 마지막 페이지 구하기

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }
  // 첫페이지 뒤로가기 막기

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }
  // 마지막 페이지로 가기
  // 스타이페이지 + 10

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span
        onClick={onClickPrevPage}
        style={{ margin: "10px", cursor: "pointer" }}
      >
        이전페이지
      </span>
      {/* [1,1,1,1,1,1,1,1,1,1,1,] */}
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && ( // 마지막 페이지보다 큰 페이지 번호는 안보이게 처리
            <span
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {startPage + index}
            </span>
          )
      )}

      <span
        onClick={onClickNextPage}
        style={{ margin: "10px", cursor: "pointer" }}
      >
        다음페이지
      </span>

      {/* <span onClick={onClickPage} id="1">
        {" "}
        1{" "}
      </span>
      <span onClick={onClickPage} id="2">
        {" "}
        2{" "}
      </span>
      <span onClick={onClickPage} id="3">
        {" "}
        3{" "}
      </span>
      <span onClick={onClickPage} id="4">
        4{" "}
      </span>
      <span onClick={onClickPage} id="5">
        {" "}
        5{" "}
      </span>
      <span onClick={onClickPage} id="6">
        {" "}
        6{" "}
      </span>
      <span onClick={onClickPage} id="7">
        {" "}
        7{" "}
      </span>
      <span onClick={onClickPage} id="8">
        {" "}
        8{" "}
      </span>
      <span onClick={onClickPage} id="9">
        {" "}
        9{" "}
      </span>
      <span onClick={onClickPage} id="10">
        {" "}
        10{" "}
      </span> */}
    </>
  );
}
