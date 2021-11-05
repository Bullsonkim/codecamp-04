import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD= gql`
query fetchBoard($boardId : ID!) {
    fetchBoard(boardId : $boardId){
        _id
        writer
        title
        contents
    }
  }
`



export default function DynamicProductReadPage(){

       const router = useRouter() 
        const {data} = useQuery(FETCH_BOARD, {
            variables:{boardId:router.query.create}
        })
            console.log(data)

        return(
            <>
            <div>게시판 ID: {router.query.create}</div>
            <div>작성자: {data && data.fetchBoard.writer}</div> 
            <div>제목: {data && data.fetchBoard.title}</div>
            <div>상세내용: {data?.fetchBoard.contents}</div>
         
            </>
        
        )

}