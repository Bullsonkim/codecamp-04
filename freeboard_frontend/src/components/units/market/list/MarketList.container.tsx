import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_BEST } from "./MarketList.queries";

export default function MarketList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: { page: 0 },
  });

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  const { data: bestdata } = useQuery(FETCH_USEDITEMS_BEST);
  // <  Pick<IQuery, "fetchUseditemsOfTheBest">,
  //   IQueryFetchUseditemsArgs
  // >(FETCH_USEDITEMS_BEST);

  function onClickMoveToMarketNew() {
    router.push("/market/register");
  }

  return (
    <MarketListUI
      data={data}
      bestdata={bestdata}
      onClickMoveToMarketNew={onClickMoveToMarketNew}
      onLoadMore={onLoadMore}
    />
  );
}
