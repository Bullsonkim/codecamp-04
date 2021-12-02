import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    //   1. 화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 그냥함수
    // setCount(function (prev) {
    //   // 로직추가하기.. ex) const aaa = 3
    //   return prev + 1;
    // });

    // 3. 화살표 함수에서 매개변수 바꾸기
    setCount((qweqwe) => qweqwe + 1);
  }

  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 증가!!</button>
    </>
  );
}
