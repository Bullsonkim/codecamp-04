import {BoardWirte} from "./Quiz01Write.container"


export default function BoardWirte(props){

    return (
        <div>
            <button onClick={onClickMove1}>1번 게시글로 이동</button>
            <button onClick={onClickMove2}>2번 게시글로 이동</button>
            <button onClick={onClickMove3}>3번 게시글로 이동</button>
        </div>
    )

}