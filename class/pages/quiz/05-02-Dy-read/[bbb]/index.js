import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const FETCH_PRODUCT= gql`
query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId){
        seller
        name
        detail
        price
    }
  }
`



export default function DynamicProductReadPage(){

       const router = useRouter() 
        const {data} = useQuery(FETCH_PRODUCT, {
            variables:{productId:router.query.bbb}
        })
        console.log(data)

        return(
            <>
            <div>나의 상품 ID: {router.query.bbb}</div>
            <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div> 
            <div>상품명: {data && data.fetchProduct.name}</div>
            <div>상품상세: {data?.fetchProduct.detail}</div>
            <div>상품가격: {data?.fetchProduct.price}</div>
            </>
        
        )

}
//{data}는 고정된값(기능)비구조화할당/구조분해할당
// 조건부 렌더링
//?. 있으면 보여주고 없으면 보여주지 마라
//&& 있으면 보여줘라
//지정값으로 바꿔라
//페이지 시작하자마자 usequery 만나서 바로 실행