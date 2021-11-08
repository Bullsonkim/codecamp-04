
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
    RadioBtn,
    RadioLabel,
    Wrapper1__inner,
    Wrapper1__inner2,
    Title,
    ErrorMsg
} from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return(
    <Background>
    <MyTitle>게시물 등록</MyTitle>

    <Wrapper1>
        <Wrapper1__inner>
            <Label>작성자 </Label>
            <IdPassword type="text" placeholder="이름을 적어주세요." onChange={props.myWriter} />
            <ErrorMsg>{props.myWriterError}</ErrorMsg>
        </Wrapper1__inner>
        <Wrapper1__inner2>
            <Label>비밀번호</Label>
            <IdPassword type="password" placeholder="비밀번호를 입력해주세요" onChange={props.myPassword} />
            <ErrorMsg>{props.myPasswordError}</ErrorMsg>
        </Wrapper1__inner2>
    </Wrapper1>

    <Wrapper2>
        <Label>제목</Label>
        <Title type="text" placeholder="제목을 작성해 주세요." onChange={props.myTitle}/>
        <ErrorMsg>{props.myTitleError}</ErrorMsg>
    </Wrapper2>

    <Wrapper3>
        <Label>내용</Label>
        <MyContentB type="text" placeholder="내용을 작성해주세요." onChange={props.myContents} />
        <ErrorMsg>{props.myContentsError}</ErrorMsg>       
    </Wrapper3>

    <Wrapper4>
        
        <Label>주소</Label>
        <div>
        <PostNum type="text" placeholder="07250" />
        <PostBtn>우편번호 검색</PostBtn>
        </div>

        <MyContent type="text" />
        <MyContent type="text" />
     </Wrapper4>


    <Wrapper5>
        <Label>유튜브</Label>
        <MyContent type="text" placeholder="링크를 복사해주세요."/> 
    </Wrapper5>


    <Wrapper6>
        <Label>사진첨부</Label>

        <div>
        <PictureBtn>Upload</PictureBtn>
        <PictureBtn>Upload</PictureBtn>
        <PictureBtn>Upload</PictureBtn>
        </div>
    </Wrapper6>   



    <Wrapper7>
        <Label>메인 설정</Label>     
        <RadioBtn type="radio" id="youtube" name="Radio"checked/>
        <RadioLabel>유튜브</RadioLabel>
        <RadioBtn type="radio" id="image" name="Radio"/>
        <RadioLabel>사진</RadioLabel>
    </Wrapper7>

    <Wrapper8>
        <RegBtn onClick={props.myClick} myCheck={props.myCheck}>등록하기</RegBtn>
    </Wrapper8>
        
        
     </Background>
        
        
        )
}