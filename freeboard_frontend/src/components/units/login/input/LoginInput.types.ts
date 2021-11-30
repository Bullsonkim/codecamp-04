import { ChangeEvent, MouseEventHandler } from "react";

export interface ILoginPageUIProps {
  onChangeMyEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: MouseEventHandler<HTMLButtonElement>;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoginPageProps {
  email?: string;
  password?: string;
}
