import { Wrapper, LoginTitle, LogOutTitle } from "./Header.style";

export default function HeaderUI() {
  return (
    <Wrapper>
      <LoginTitle>로그인</LoginTitle>
      <LogOutTitle>로그아웃</LogOutTitle>
    </Wrapper>
  );
}
