import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  //   한번만 실행하여 State에 넣어줌
  function onClickDelete(event) {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    const newBaskets = baskets.filter((el) => el._id !== event?.target.id);

    localStorage.setItem("basket", JSON.stringify(newBaskets));
  }

  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니!!</h1>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickDelete}>삭제</button>
        </div>
      ))}
    </>
  );
}
