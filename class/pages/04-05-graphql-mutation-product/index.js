import { useMutation,gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT= gql`

    mutation createProduct ($seller: String, $createProductInput:CreateProductInput!){

        createProduct (seller: $seller, createProductInput:$createProductInput ){
                _id
                number
                message
            }
            
    }    
`

export default function GraphqlMutationProductPage(){
    const [mySeller, setMyseller] = useState("")
    const [myName, setMyname] = useState("")
    const [myDetail, setMydetail] = useState("")
    const [myPrice, setMyprice] = useState("")

    const[createProduct]=useMutation(CREATE_PRODUCT)

    function onChangeMyseller(event){
        setMyseller(event.target.value)
    }

    function onChangeMyname(event){
        setMyname(event.target.value)
    }

    function onChangeMydetail(event){
        setMydetail(event.target.value)
    }

    function onChangeMyprice(event){
        setMyprice(event.target.value)
    }

    async function zzz(){
        const result = await createProduct({
            variables: {seller:mySeller, name:myName,detail:myDetail,price:myPrice}
                
        })
        console.log(result)
    }



    return(
        <div>
            판매자: <input type="text" onChange={onChangeMyseller}/> <br />
            상품명: <input type="text" onChange={onChangeMyname}/> <br />
            상품내용: <input type="text"onChange={onChangeMydetail}/> <br />
            상품가격: <input type="text"onChange={onChangeMyprice}/> <br />
            <button onClick={zzz}>상품 등록하기!!</button>
        </div>
    )
}

