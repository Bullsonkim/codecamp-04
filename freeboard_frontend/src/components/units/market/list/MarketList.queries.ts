import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      price
      tags
      images
      remarks
      contents
      pickedCount
      createdAt
      seller {
        name
      }
    }
  }
`;

export const FETCH_USEDITEMS_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      tags
    }
  }
`;
