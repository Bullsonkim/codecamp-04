import * as S from "./MarketList.styles";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";

export default function MarketListUI(props: any) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        // style={{ height: "700px", overflow: "auto" }}
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}

        // useWindow={false}
      >
        {/* {props.bestdata?.fetchUseditemsOfTheBest.map((el, index: string) => (
        <div key={el._id}>
          <span>{el.name}</span>
          <span>{el.remakrs}</span>
          <span>{el.contents}</span>
          <span>{el.price}</span>
          <span>{el.tags}</span>
          <span>{el.seller.name}</span>
          <span>{el.createdAt}</span>
        </div>
      ))} */}
        <S.WrapperGoods>
          {props.data?.fetchUseditems.map((el) => (
            <div key={el._id}>
              <S.Image src={`https://storage.googleapis.com/${el.images}`} />
              <S.Name>{el.name}</S.Name>
              <S.Remakrs>{el.remakrs}</S.Remakrs>
              <S.Contents>{el.contents}</S.Contents>
              <S.Price>{el.price}</S.Price>
              <S.Price>{el.tags}</S.Price>
              <S.Seller>{el.seller.name}</S.Seller>
              <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
            </div>
          ))}
        </S.WrapperGoods>
      </InfiniteScroll>
      <S.Register onClick={props.onClickMoveToMarketNew}>
        맛집등록 하기
      </S.Register>
    </S.Wrapper>
  );
}
