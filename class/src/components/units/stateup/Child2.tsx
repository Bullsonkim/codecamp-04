// import {useState} from "react";

interface IChild2Props {
  count: number;
  onClickCounter: () => void;
}
export default function Child2(props: IChild2Props) {
  // const [count, setCount] = useState(0)

  // function onClickCounter(){
  //     setCount((prev) => prev+1)
  // }

  return (
    <>
      <div>자식2 카운트:{props.count}</div>
      <button onClick={props.onClickCounter}>카운트올리기</button>
      {/* <button onClick={onClickCounter}>카운트올리기</button> */}
    </>
  );
}
