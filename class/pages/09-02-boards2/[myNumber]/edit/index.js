import { FETCH_BOARDS } from "../../../../../freeboard_frontend/src/components/units/board/list/BoardList.queries"
import BoardWrite from "../../../../src/components/units/board/write3/BoardWrite.container"
import {gql, useQuery} from '@apollo/client'
import router, { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
            number
    }
}
`

export default function BoardEditPage(){
    const router = useRouter()

    const {} = useQuery(FETCH_BOARD, {
        
        variables : {number: Number(router.query.myNumber) }
    })

    return <BoardWrite isEdit={true} data={data}/>
}