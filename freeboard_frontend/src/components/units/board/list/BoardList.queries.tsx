import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const BEST_BOARDS = gql`
  query {
    fetchBoardsOfTheBest {
      writer
      title
      likeCount
      createdAt
    }
  }
`;
export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
