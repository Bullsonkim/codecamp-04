import * as S from "./joinMember.styles";
import { IJoinUIProps } from "./joinMember.types";

export default function JoinMemberUI(props: IJoinUIProps) {
  return (
    <S.Wrapper>
      <S.Title> 회원 가입</S.Title>
      <S.Label>이름</S.Label>
      <S.InputName
        type="text"
        onChange={props.onChangeMyname}
        placeholder="이름을 입력하세요!"
      />
      <S.Error>{props.myNameError} </S.Error>
      <S.Label>E-Mail</S.Label>
      <S.InputEmail
        type="text"
        onChange={props.onChangeMyEmail}
        placeholder="이메일을 입력하세요!"
      />
      <S.Error>{props.myEmailError} </S.Error>
      <S.Label>비밀번호</S.Label>
      <S.InputPassword
        type="password"
        onChange={props.onChangeMyPassword}
        placeholder="비밀번호를 입력하세요!"
      />
      <S.Error>{props.myPasswordError} </S.Error>
      {/* <S.Label>비밀번호 확인</S.Label>
      <S.InputPassword />
      <S.Error> </S.Error> */}
      <S.SubmitButton onClick={props.onClickSubmit}>
        회원 가입하기
      </S.SubmitButton>
    </S.Wrapper>
  );
}
