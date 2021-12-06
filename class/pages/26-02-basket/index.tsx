import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }

    const { __typename, ...newEL } = el;
    baskets.push(newEL);

    localStorage.setItem("basket", JSON.stringify(baskets));
    // 장바구니에 1개만 들어감 배열로 변경 필요
  };

  function onClickLogin() {
    alert("로그인에 성공하셨습니다");
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    if (basket.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다! 장바구니 페이지로 이동할까요?"
      );
      if (result) router.push("26-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
