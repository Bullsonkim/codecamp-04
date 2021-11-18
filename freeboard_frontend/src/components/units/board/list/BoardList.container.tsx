import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  BEST_BOARDS,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  // const { data } = useQuery(FETCH_BOARDS);
  const { data: bestdata } = useQuery(BEST_BOARDS);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }
  //

  const [startPage, setStartPage] = useState(1);

  const { data: pagedata, refetch } = useQuery<
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

  return (
    <BoardListUI
      bestdata={bestdata}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      pagedata={pagedata}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      dataBoardsCount={dataBoardsCount}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
