import { ImageWrapper } from "../../board/detail/BoardDetail.styles";
import * as S from "./MarketRegister.styles";

export default function MarketRegisterUI() {
  return (
    <S.Wrapper>
      <S.Title> 🥘 맛집 등록하기 🥘 </S.Title>
      <S.Label>맛집명 </S.Label>
      <S.Name />
      <S.Error></S.Error>
      <S.Label>한줄 평</S.Label>
      <S.Remarkrs />
      <S.Error></S.Error>
      <S.Label>맛집설명</S.Label>
      <S.Contents />
      <S.Label>메뉴가격</S.Label>
      <S.Price />
      <S.Label>태그입력</S.Label>
      <S.Tag placeholder="#" />

      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.Uploads01 />
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인사진</S.Label>
      </S.OptionWrapper>
      <S.SubmitButton>등록하기</S.SubmitButton>
    </S.Wrapper>
  );
}
