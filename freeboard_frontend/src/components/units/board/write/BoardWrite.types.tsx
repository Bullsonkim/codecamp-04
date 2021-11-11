import {ChangeEvent} from 'react'

export interface IBoardWriteProps{
    isActive?: boolean
    rf?: boolean
    isEdit?: boolean
}

export interface IBoardWritestylesProps {
    isActive: boolean

}

export interface IBoardWriteUIProps {
    isEdit?: boolean
    isActive?: boolean
    rf?: boolean
    myWriterError: string
    myPasswordError: string
    myTitleError: string
    myContentsError: string
    fixBtn: ()=> void
    onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: (event:any) => void
}


export interface IBoardpresenterProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

