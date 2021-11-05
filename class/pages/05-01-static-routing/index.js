import {useRouter} from 'next/router'



export default function StaticRoutingPage (){
    const router = useRouter()
    
    function onClickMove(){
        // router.pathname 브라우저 현재 주소
        router.push('/05-02-static-routed')
        //주소 처음에 "/" 포함해야함

    }

    return(

        <button onClick={onClickMove}>페이지 이동하기!!</button>
    // 이벤트 핸들러 onClickMove
    )


}