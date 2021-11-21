import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  fetchBoards?: any;
}

export interface IBoardCommentListUIItemProps {
  el: IBoardComment;
}
