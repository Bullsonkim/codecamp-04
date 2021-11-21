import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
  data?: any;
  isActive?: boolean;

  isEdit?: boolean;
}

export interface IBoardWritestylesProps {
  isActive: boolean;
}

export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
};

export interface IBoardWriteUIProps {
  isEdit?: boolean;
  isActive?: boolean;
  isedt?: boolean;
  myWriterError: string;
  myPasswordError: string;
  myTitleError: string;
  myContentsError: string;
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeMyYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  onToggleModal: any;
  zipcode: string;
  address: string;
  addressDetail: string;
  onClickAddressSearch: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen?:boolean;
  onCompleteAddressSearch: any;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IBoardpresenterProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
