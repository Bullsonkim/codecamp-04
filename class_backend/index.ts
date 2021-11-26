// console.log("Hello World!!");

import { ApolloServer, gql } from 'apollo-server';
import {createConnection} from 'typeorm';
import Board from "./Board.mysql"


const myTypeDefs = gql`

    input CreateBoardInput{
        writer: String
        title: String
        age: Int
    

    }

    type AAA{
        number: Int
        writer: String
        title:  String
        age: Int
    }


    type Query {
        fetchBoards: [AAA]
    }


    type Mutation {
       #gql주석은 샵 createBoard(writer: String, title: String, age: Int) : String
        createBoard(createBoardInput: CreateBoardInput!) : String
        deleteBoard(number: Int!): String
    }

`

const myResolvers = {
    Query:{
        fetchBoards: async() =>{
            //데이터베이스 게시물 데이터 꺼내오기
            const result = await Board.find({where:{isDeleted:false}});
            console.log(result);

            return result;
        },
    },

    Mutation:{
        // loginCheck: (parent: and, args:any) =>{

        // },
        deleteBoard: async(_:any, args:any) =>{
            await Board.update({number:args.number},{deletedAt:new Date()});
            return "게시물이 정상적으로 삭제 되었습니다."

        },


        createBoard: async (_: any, args: any) =>{
            // loginCheck({aaa:"철수"})
            //데이터 베이스 게시물 데이터 등록하기
            //1번째 방법
            // await Board.insert({
            //     title:"안녕하세요 테스트입니다!",
            //     writer: "짱구",
            //     age: 8,
            // });

            //2번째 방법
            // await Board.insert({
            //     title: args.title,
            //     writer: args.writer,
            //     age: args.age,
            // });

            //3번쨰 방법
            //데이터 입력시에는 input을 지정해줘야함
            await Board.insert({
                // title: args.createBoardInput.title,
                // writer: args.createBoardInput.writer,
                // age: args.createBoardInput.age,
                ...args.createBoardInput
            });
            return "게시물 등록에 성공 하였습니다!!";

        }
    }
}
//args 인자 값을 받아 입력할 수 있도록 변경
const server = new ApolloServer({
    typeDefs : myTypeDefs,
    resolvers : myResolvers,

})
//서버 설정

//typeDefs 타입 정의
//resolvers 실행되는공간 api는 함수

createConnection({
    type:"mysql",
    database:"mysql",
    username: "root",
    password: "codecamp",
    host:"34.64.207.239",
    port:3310,
    // @ts-ignore
    entities:[__dirname + "/*.mysql.ts"],
    logging: true,
    synchronize:true,



})
.then(()=> {
//연결 성공시 실행하기!
    console.log("연결완료!");

    server.listen({port: 4000});
    //4000번 포트 받기
})

.catch((error) => {
//연결 실패시 실행하기!
console.log(error);
});