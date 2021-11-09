import {gql, useQuery} from '@apollo/client'


import {
    BestTitle,
    WrapperMain,
    WrapperBoard,
    WrapperBest,
    BestWriter,
    Board,
    Bestlike,
    BestDate



}  from "../../../styles/board_main";


const FETCH_BOARDS= gql`
    query {
        fetchBoards{
            writer
            title
            contents 
            createdAt
        }
        fetchBoardsOfTheBest{
            writer
            title
            likeCount
            createdAt
        }
    }
   
`


export default function MainPage (){

    const {data}= useQuery(FETCH_BOARDS)

   

    return(
        <WrapperMain >

            <h1>베스트 게시글</h1>

          
            {data?.fetchBoardsOfTheBest.map((el) =>(
            
              <WrapperBest>
                  
                    <BestWriter>작성자 {el.writer}</BestWriter>
                    <BestTitle>제목 {el.title}</BestTitle>
                    <Bestlike>좋아요 {el.likeCount}</Bestlike>
                    <BestDate>작성일 {el.createdAt.slice(0,10)}</BestDate>
                 
              
                </WrapperBest>
        ))}

      



                {data?.fetchBoards.map((el, index) =>(
               
                 <WrapperBoard key={el.number}> 
        
                    {/* <Column><input type="checkbox" /></Column> */}
                    <Board>{index +1}</Board>
                    <Board>{el.writer}</Board>
                    <Board>{el.title}</Board>
                    <Board>{el.createdAt.slice(0,10)}</Board>
                 
                </WrapperBoard>
              
        ))}
        </WrapperMain>
    )
}