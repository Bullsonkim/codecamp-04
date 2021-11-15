import styled from '@emotion/styled'
import{IBoardWritestylesProps} from './BoardWrite.types'
import BoardWrite from './BoardWrite.container'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    // background-color: ${(props:IBoardWritestylesProps) => props.qqq ===true ? "yellow" : "gray"};
    // 강제로 함수를 만들어줌
    background-color: ${(props:IBoardWritestylesProps) => props.qqq===true ? "yellow" : "gray"};

    font-size: 30px;
`