import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
export default function MyLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨!");
    inputRef.current?.focus();

    // componentWillunMount 와 동일
    return () => {
      console.log("잘가요~!");
    };
  }, []);

  // [] 의존성 배열/ dependency array
  // 배열안의 함수가 변경 될 때마다 다시 실행
//   배열안에 함수 없으면 1번만 실행

  // componentDidUpdata와 비슷
  useEffect(() => {
    console.log("수정됨!!");
  });

  // 의존성 배열이 없으면 다시 실행 UPDATE와 유사

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      {/* 변수 태그 1:1연결 */}
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <button onClick={onClickMove}>페이지 이동하기!! </button>
    </>
  );
}
