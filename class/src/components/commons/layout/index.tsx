import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";
const Wrapper = styled.div``;
const Body = styled.div``;
const BodyWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 200px;
  height: 700px;
  background-color: blue;
`;
const HIDDEN_HEADERS = ["/12-05-modal-address-stateprev"];
interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>sidebar!!!</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}

// import { ReactChild } from "react";
// import styled from "@emotion/styled";
// import Header from "./header/Header.container";
// import Banner from "./banner/Banner.container";
// import Navigation from "./navigation/Navigation.container";
// import Footer from "./footer/Footer.container";

// const BodyWrapper = styled.div`
//   display: flex;
// `;

// const Sidebar = styled.div`
//   width: 200px;
//   height: 700px;
//   background-color: blue;
// `;

// const HIDDEN_HEADERS = [
//     //콘솔창 asPath 여러곳에서 불러서 쓰이는 경우 변수명 대문자로 지정
// ]

// interface ILayoutProps {
//   children: ReactChild;
// }

// export default function Layout(props: ILayoutProps) {
//     const router = useRouter()
//     console.log(router);

//     const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
//     //HIDDEN_HEADERS에 지정된곳 숨김

//     //해더가 포함되면 안나오게 설정
//   return (
//     <Wrapper>
//         {! isHiddenHeader && < Header/ >}
//       <Header />
//       <Banner />
//       <Navigation />
//       <BodyWrapper>
//         <Siderbar> 여기는 사이드바 입니다. </Siderbar>
//         <Body>{props.children}</Body>
//       </BodyWrapper>
//       <Footer />
//     </Wrapper>
//   );
// }
