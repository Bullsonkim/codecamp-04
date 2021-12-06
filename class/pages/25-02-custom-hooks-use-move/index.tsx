import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHookuseMoveToPage() {
  const { moveTopage } = useMoveToPage;

  return (
    <>
      <div>커스텀훅 연습 - 페이지이동</div>
      <button onClick={moveTopage("/board")}>게시판으로 이동</button>
      <button onClick={moveTopage("/market")}>마켓으로 이동</button>
      <button onClick={moveTopage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
