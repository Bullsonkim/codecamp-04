import { Searchbar, SearchbarInput } from "./Search.styles";
import { ISearchbarUIProps } from "./Search.types";

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력하세요!!"
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
