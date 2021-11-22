import {
  Navigation,
  Store,
  Wrapper,
  MyPage,
  Dessert,
} from "./Navigation.style";
import { useRouter } from "next/router";

export default function NavigationUI() {
  const router = useRouter();

  function onClickMoveDesert(event) {
    router.push("/boards/sub/");
  }

  return (
    <Wrapper>
      <Navigation>자유게시판</Navigation>
      <Store>스토어</Store>
      <Dessert onClick={onClickMoveDesert} style={{ cursor: "pointer" }}>
        서브
      </Dessert>
      <MyPage>마이 페이지</MyPage>
    </Wrapper>
  );
}
