import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, BEST_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const { data: bestdata } = useQuery(BEST_BOARDS);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      bestdata={bestdata}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
