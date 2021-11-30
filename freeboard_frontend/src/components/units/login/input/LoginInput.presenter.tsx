import * as S from "./LoginInput.styles";
import { ILoginPageUIProps } from "./LoginInput.types";

export default function LoginPageUI(props: ILoginPageUIProps) {
  return (
    <S.Wrapper>
      <S.Title> LOGIN </S.Title>
      <S.MailWrapper>
        이메일
        <S.Email
          onChange={props.onChangeMyEmail}
          placeholder="이메일을 입력하세요!"
        />
      </S.MailWrapper>
      <S.PasswordWrapper>
        비밀번호
        <S.Password
          onChange={props.onChangeMyPassword}
          placeholder="비밀번호를 입력하세요!"
          type="password"
        />
      </S.PasswordWrapper>
      <S.LoginBtn onClick={props.onClickLogin}>로그인</S.LoginBtn>
    </S.Wrapper>
  );
}
