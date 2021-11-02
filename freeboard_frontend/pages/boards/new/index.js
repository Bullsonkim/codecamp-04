
import { 
    Background, MyTitle, MyContent, IdPassword, PostNum,
    Label, Wrapper1,Wrapper2,Wrapper3,
    Wrapper4,Wrapper5,Wrapper6,Wrapper7, 
    Wrapper8, PostBtn, PictureBtn, RegBtn, 
    Title, MyContentB, RadioBtn , Wrapper1__inner,Wrapper1__inner2
} from '../../../styles/emotion.js'


export default function EmotionPage(){

    return(
   
        <Background>
            <MyTitle>게시물 등록</MyTitle>
            
            <Wrapper1>
                <Wrapper1__inner>
                    <Label>작성자 </Label>
                    <IdPassword  type="text" placeholder="이름을 적어주세요."/>
                </Wrapper1__inner>
                <Wrapper1__inner2>
                    <Label>비밀번호</Label>
                    <IdPassword  type="password" placeholder="비밀번호를 입력해주세요"/>
                </Wrapper1__inner2>
            </Wrapper1>
            
            <Wrapper2>
                <Label>제목</Label>
                <Title type="text" placeholder="제목을 작성해 주세요."/>
            </Wrapper2>

            <Wrapper3>
                <Label>내용</Label>
                <MyContentB type="text" placeholder="내용을 작성해주세요."/>       
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
            <RegBtn>등록하기</RegBtn>
            </Wrapper8>
                
          


    
        </Background>
  
    )
}