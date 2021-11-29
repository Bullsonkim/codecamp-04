import { MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  onClicekDisLike: MouseEventHandler<HTMLSpanElement>;
  onClickFix: MouseEventHandler<HTMLButtonElement>;
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDelete: () => void;
}
