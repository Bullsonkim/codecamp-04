import { useMutation, gql } from '@apollo/client'
import router, { useRouter } from 'next/router' //라우터 기능 사용 적용
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProductPage(){
    const router = useRouter() //라우터 사용 선언
    const [createProduct] = useMutation(CREATE_PRODUCT)

    async function zzz(){

        try{

        const result = await createProduct({ //내용은 같지만 새로운 ID 발급
            variables: {
                seller,
                createProductInput: {
                    name, 
                    detail,
                    price
                }
            }
        })
        console.log(result)

        // router.push('/05-08-dynamic-product-read/' +result.data.createProduct._id) //기초 표기법
        router.push(`/quiz/05-02-Dy-read/${result.data.createProduct._id}`) //_id위치에서 원하는 정보 변경,템플릿 리터럴
        // router.push('/05-08-dynamic-product-read/result.data.createProduct._id) //잘못된 표기법
    } catch(error){
        console.log(error.message)
    }
}
    

    return (
        <>
            판매자: <input type="text" /><br />
            상품명: <input type="text" /><br />
            상품내용: <input type="text" /><br />
            상품가격: <input type="text" /><br />
            <button onClick={zzz}>상품 등록하기!!!</button>
        </>
    )


}
