import LoginPageUI from "./LoginInput.presenter";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import React, { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";
import { ILoginPageProps } from "./LoginInput.types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(props: ILoginPageProps) {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const onChangeMyEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setMyEmail(event.target.value);
  };
  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken);
      // 여기서 글로벌 스테이트에 넣을 setAccessToken 필요
      router.push(`/boards/login/success`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <LoginPageUI
      onClickLogin={onClickLogin}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
    />
  );
}
