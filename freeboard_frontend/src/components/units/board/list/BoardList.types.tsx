import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, MouseEvent, MouseEventHandler, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListStylesProps {
  isMatched: boolean;
}

export interface IBoardListUIProps {
  pagedata: any;
  lastPage: number;
  onClickPage: MouseEventHandler<HTMLDivElement>;
  onClickPrevPage: MouseEventHandler<HTMLDivElement>;
  bestdata: any;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
}
