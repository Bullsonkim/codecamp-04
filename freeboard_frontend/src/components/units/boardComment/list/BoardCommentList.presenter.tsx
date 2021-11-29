import React from "react";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll
      style={{ height: "700px", overflow: "auto" }}
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      useWindow={false}
    >
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
