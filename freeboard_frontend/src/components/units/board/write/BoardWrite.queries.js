import {gql} from '@apollo/client'



export const CREATE_BOARD= gql`

    mutation createBoardInput($createBoardInput: CreateBoardInput!){
      createBoard(createBoardInput: $createBoardInput){
          _id
          writer
          title
          contents
        }
    }   
`