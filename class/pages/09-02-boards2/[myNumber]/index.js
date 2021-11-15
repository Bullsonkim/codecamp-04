import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function DynamicProductReadPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, { variables: { number: Number(router.query.myNumber) } })

    // console.log(data) // 자바스크립트 주석

    return (
        <>
            <div>나의 게시글 번호: {data?.fetchBoard.number}</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={()=> router.push(`/09-02-boards2/${router.query.myNumber}/edit`)}>수정하기로 이동</button>
        </>
    )

}
//{data}는 고정된값(기능)비구조화할당/구조분해할당
// 조건부 렌더링
//?. 있으면 보여주고 없으면 보여주지 마라
//&& 있으면 보여줘라
//지정값으로 바꿔라
//페이지 시작하자마자 usequery 만나서 바로 실행