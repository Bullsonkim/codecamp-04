import {ChangeEvent} from 'react'


export interface IBoardWriteProps{
    aaa: (event: ChangeEvent<HTMLInputElement>) => void
    bbb: (event: ChangeEvent<HTMLInputElement>) => void
    ccc: (event: ChangeEvent<HTMLInputElement>) => void
    zzz: () => void
    qqq: boolean
    ggg: boolean
    xxx: () => void
    data: any
}

export interface IBoardWritestylesProps {
    qqq:boolean
}

export interface IBoardWriteUIProps {
    isEdit: boolean,
    data?: any
}

export interface IMyVariables {
    number: number,
    writer?: string,
    title?: string,
    contents?: string
}