import { ReactChild, ReactFragment, ReactPortal } from "react";
import * as S from "./LoginSuccess.styles";

export default function LoginSuccessUI(props) {
  return (
    <S.Wrapper>
      <S.Title>🎉 환영합니다!! 🎉</S.Title>
      <S.Name>{props.data?.fetchUserLoggedIn.name}님</S.Name>
      <S.Email>{props.data?.fetchUserLoggedIn.email}</S.Email>
    </S.Wrapper>
  );
}
