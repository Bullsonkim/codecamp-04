import { Wrapper, Login, Logout, Join } from "./Header.style";
import { IHeaderUIProps } from "./Header.types";

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <Wrapper>
      <Join id="/boards/joinMember/" onClick={props.onClickMenu}>
        회원가입
      </Join>
      <Login id="/boards/login/" onClick={props.onClickMenu}>
        로그인
      </Login>
      {/* <Logout id="/login" onClick={props.onClickMenu}>
        로그아웃
      </Logout> */}{" "}
      */
    </Wrapper>
  );
}
