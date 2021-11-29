import {
  Navigation,
  Store,
  Wrapper,
  MyPage,
  Dessert,
  Visitor,
} from "./Navigation.style";
import { useRouter } from "next/router";

export default function NavigationUI() {
  const router = useRouter();

  function onClickMoveDesert(event) {
    router.push("/boards/openapi/");
  }

  function onClickMoveBoardlist(event) {
    router.push("/boards/");
  }

  function onClickMoveVisitor(event) {
    router.push("/firebase/");
  }

  return (
    <Wrapper>
      <Navigation onClick={onClickMoveBoardlist} style={{ cursor: "pointer" }}>
        자유게시판
      </Navigation>
      <Store>스토어</Store>
      <Dessert onClick={onClickMoveDesert} style={{ cursor: "pointer" }}>
        랜덤음식보기
      </Dessert>
      <MyPage>마이 페이지</MyPage>
      <Visitor onClick={onClickMoveVisitor} style={{ cursor: "pointer" }}>
        방명록
      </Visitor>
    </Wrapper>
  );
}
