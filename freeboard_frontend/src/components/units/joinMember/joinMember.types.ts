import { ChangeEvent, MouseEvent } from "react";

export interface IJoinUIProps {
  onChangeMyname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IJoinUIProps {
  myName?: string;
  myEmail?: string;
  myPassword?: string;
  myNameError: string;
  myPasswordError: string;
  myEmailError: string;
}
