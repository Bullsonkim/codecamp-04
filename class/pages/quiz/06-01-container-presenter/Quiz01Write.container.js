import {DyamicRoutingNumberPage} from "./Quiz01Write.presenter"


export default function DyamicRoutingNumberPage (){
    const router = useRouter()
    
    function onClickMove1(){
       
        router.push('/05-06-dynmic-routed-number/1')
     

    }

    function onClickMove2(){
       
        router.push('/05-06-dynmic-routed-number/2')
    

    }

    function onClickMove3(){
     
        router.push('/05-06-dynmic-routed-number/3')
      

    }
}    
