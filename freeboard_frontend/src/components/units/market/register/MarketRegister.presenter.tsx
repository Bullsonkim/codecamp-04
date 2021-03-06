import { ImageWrapper } from "../../board/detail/BoardDetail.styles";
import * as S from "./MarketRegister.styles";

export default function MarketRegisterUI() {
  return (
    <S.Wrapper>
      <S.Title> ๐ฅ ๋ง์ง ๋ฑ๋กํ๊ธฐ ๐ฅ </S.Title>
      <S.Label>๋ง์ง๋ช </S.Label>
      <S.Name />
      <S.Error></S.Error>
      <S.Label>ํ์ค ํ</S.Label>
      <S.Remarkrs />
      <S.Error></S.Error>
      <S.Label>๋ง์ง์ค๋ช</S.Label>
      <S.Contents />
      <S.Label>๋ฉ๋ด๊ฐ๊ฒฉ</S.Label>
      <S.Price />
      <S.Label>ํ๊ทธ์๋ ฅ</S.Label>
      <S.Tag placeholder="#" />

      <S.ImageWrapper>
        <S.Label>์ฌ์ง์ฒจ๋ถ</S.Label>
        <S.Uploads01 />
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>๋ฉ์ธ์ฌ์ง</S.Label>
      </S.OptionWrapper>
      <S.SubmitButton>๋ฑ๋กํ๊ธฐ</S.SubmitButton>
    </S.Wrapper>
  );
}
