import { gql, useQuery } from "@apollo/client";
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

export default function PagenationBasicPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickRow(event) {
    // console.log(event.target.id);
    console.log(event.currentTarget.id);
    // 이벤트 버블링 처리
  }

  return (
    <>
      <h1>이벤트 버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span>{el.title} </span>
            <span> {el.writer} </span>
          </div>
        ))}
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          key={el}
          onClick={onClickPage}
          id={String(el)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {el}
        </span>
      ))}
    </>
  );
}
