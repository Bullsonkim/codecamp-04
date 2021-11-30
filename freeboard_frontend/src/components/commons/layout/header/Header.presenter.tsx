import { Wrapper, Login, Logout } from "./Header.style";
import { IHeaderUIProps } from "./Header.types";

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <Wrapper>
      <Login id="/boards/login/" onClick={props.onClickMenu}>
        로그인
      </Login>
      <Logout id="/login" onClick={props.onClickMenu}>
        로그아웃
      </Logout>
    </Wrapper>
  );
}
