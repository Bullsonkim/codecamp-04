import { ChangeEvent } from "react";
import SearchbarUI from "./Search.presenter";
import { ISearchbarsProps } from "./Search.types";
import _ from "lodash";

export default function SearchBar(props: ISearchbarsProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    // console.log("<<<<<<<<<<< props.refetchBoardsCount >>>>>>>>>")
    console.log(props.refetchBoardsCount)
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchbarUI onChangeSearchbar={onChangeSearchbar} />;
}
