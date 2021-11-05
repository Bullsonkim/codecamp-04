import { useMutation,gql } from "@apollo/client"
import{useState} from 'react'

const CREATE_BOARD= gql`

    mutation createBoardInput($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
          _id
          writer
          title
        }
    }   
`
import { 
    Background, 
    MyTitle, 
    MyContent, 
    IdPassword, 
    PostNum,
    Label, 
    Wrapper1,
    Wrapper2,
    Wrapper3,
    Wrapper4,
    Wrapper5,
    Wrapper6,
    Wrapper7, 
    Wrapper8, 
    PostBtn, 
    PictureBtn,
    RegBtn, 
    MyContentB, 
    RadioBtn , 
    Wrapper1__inner,
    Wrapper1__inner2,
    Title,
    ErrorMsg
} from '../../../styles/emotion.js'


export default function BoardsNewPage() {
    const[createBoard]=useMutation(CREATE_BOARD)

    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
  
    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");
  
    function onChangeMyWriter(event) {
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }
    }
  
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }
    }
  
    async function onClickSubmit() {
      if (myWriter === "") {
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (myPassword === "") {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (myTitle === "") {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (myContents === "") {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "") {
            const result = await createBoard({
            variables: {createBoardInput: {writer:myWriter,
            password:myPassword,title:myTitle,contents:myContents}}
                          
        })
        console.log(result)
        alert('게시물을 등록합니다!')``
      }
    }

    return(
   
        <Background>
            <MyTitle>게시물 등록</MyTitle>
            
            <Wrapper1>
                <Wrapper1__inner>
                    <Label>작성자 </Label>
                    <IdPassword type="text" placeholder="이름을 적어주세요." onChange={onChangeMyWriter} />
                    <ErrorMsg>{myWriterError}</ErrorMsg>
                </Wrapper1__inner>
                <Wrapper1__inner2>
                    <Label>비밀번호</Label>
                    <IdPassword type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangeMyPassword} />
                    <ErrorMsg>{myPasswordError}</ErrorMsg>
                </Wrapper1__inner2>
            </Wrapper1>
            
            <Wrapper2>
                <Label>제목</Label>
                <Title type="text" placeholder="제목을 작성해 주세요." onChange={onChangeMyTitle}/>
                <ErrorMsg>{myTitleError}</ErrorMsg>
            </Wrapper2>

            <Wrapper3>
                <Label>내용</Label>
                <MyContentB type="text" placeholder="내용을 작성해주세요." onChange={onChangeMyContents} />
                <ErrorMsg>{myContentsError}</ErrorMsg>       
            </Wrapper3>

            <Wrapper4>
                <Label>주소</Label>
                <PostNum type="text" placeholder="07250" />
             
                <PostBtn>우편번호 검색</PostBtn>             
            </Wrapper4>

            <MyContent type="text" />
               
            <MyContent type="text" />

            <Wrapper5>
                <Label>유튜브</Label>
                <MyContent type="text" placeholder="링크를 복사해주세요."/> 
            </Wrapper5>

            
            <Wrapper6>
                <Label>사진첨부</Label>
            
                <PictureBtn>Upload</PictureBtn>
                <PictureBtn>Upload</PictureBtn>
                <PictureBtn>Upload</PictureBtn>
            </Wrapper6>               
            <Wrapper7>
            <Label>메인 설정</Label>
                <span>
                <RadioBtn type="radio" name="main" checked />유튜브
                </span>

                <span>
                <RadioBtn type="radio" name="main"/>사진
                </span>
                
            </Wrapper7>

            <Wrapper8>
            <RegBtn onClick={onClickSubmit}>등록하기</RegBtn>
            </Wrapper8>
                
          


    
        </Background>
    );
}
