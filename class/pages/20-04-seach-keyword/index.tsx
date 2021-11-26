import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;
export default function SearchPagenationDebouncePage() {
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  // 입력0.5초 없을때 실행

  // 입력 중 추가 입력 없을떄 실행
  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
    // refetch({ search: event.target.value });
    // setMySearch(event.target.value);
  }

  // function onClickSearch() {
  //   // mySearch 키워드로 fetchBoard 요청하기!
  //   refetch({ search: mySearch, page: 1 });
  //   setMyKeyword(mySearch);
  //   // 검색결과 1페이지 보여주기
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <h1>검색 페이지!!</h1>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <>
          <div key={el._id}>
            <span style={{ paddingRight: "50px" }}>{el.writer}</span>
            <span style={{ paddingRight: "50px" }}>{el.title}</span>
            <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
          </div>
        </>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
      ;
    </>
  );
}
