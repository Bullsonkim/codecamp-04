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

    const [mySeller,setSeller] = useState("");
    const [myName, setName] = useState("");
    const [myDetail,setDetail] = useState("");
    const [myPrice,setPrice] = useState("");

    function ocSeller(event) {
        setSeller(event.target.value);
      }
    
    function ocName(event) {
        setName(event.target.value);
    }

    function ocDetail(event) {
        setDetail(event.target.value);
      }

    function ocPrice(event) {
        setPrice(event.target.value);
    }
    

    async function zzz(){

        try{

        const result = await createProduct({ //내용은 같지만 새로운 ID 발급
            variables: {
                seller:mySeller,
                createProductInput: {
                    name:myName,
                    detail:myDetail,
                    pirce:Number(myPrice)
                }
            }
        })
        console.log(result)

       
        router.push(`/quiz/05-02-Dy-read/${result.data.createProduct._id}`) 

        } catch(error){
            console.log(error.message)
             }       

    }

    return (
        <>
            판매자: <input type="text" onChange={ocSeller}/><br />
            상품명: <input type="text" onChange={ocName}/><br />
            상품내용: <input type="text" onChange={ocDetail}/><br />
            상품가격: <input type="text" onChange={ocPrice}/><br />
            <button onClick={zzz}>상품 등록하기!!!</button>
        </>
    )


}
