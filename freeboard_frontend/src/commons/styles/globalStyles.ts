import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: 0px;
    font-family: "myFont";
  }
  //전체 폰트 변경

  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifibit.ttf");
  }

  //폰트 불러오기
`;

//모든 컴포넌트에 적용되는 스타일
