// export default function TypescriptPage(){


//     //문자타입 - 타입추론
//     let aaa = "안녕하세요"
//     // aaa = 3


//     //문자티입
//     let bbb :string;
//     bbb = "반갑습니다"
//     // bbb = 123


//     //숫자타입
//     let ccc: number = 5
//     // ccc = "asdf"

//     //배열타입
//     let ddd: number[] = [1,2,3,4,5,6]
//     let eee: string[] = ["a","b","c","d"]
//     let qqq = ["asdf", "qwer","erty"]
//     let fff: number[] | string [] = [1,2,3,4,5,6]
//     //유니온 타입 ,숫자 배열 or 문자 배열 가능
//     fff = ["a","b","c"]
//     let ggg: (number | string)[] = [1,"a",5,"r"]
//     //숫자, 문자 섞어서 배열 가능

//     //모든 타입 가능, 타입변경이 어려운경우 any로 처리하고 조금식 수정해나감
//     let uuu: any =5
//     uuu = "asdf"

//     //객체타입

//     interface IProfile{ //이름 변경가능 관례명
//         name:string
//         age:number | string
//         school:string
//     }
//     let profile: IProfile= {
//         name:"첧수",
//         age:8,
//         school:"다람쥐초등학교"
//     }
//     profile.age="8살"
//     // profile.school=3




//     return(
//         <div>타입스크립트 연습</div>

//     )
// }