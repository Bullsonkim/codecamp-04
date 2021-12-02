export default function MapElPage() {
  // 1. 기본방법(화살표함수)
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //     return `${el}어린이`;
  //   });
  //   2. 기본방법(그냥함수)
  //   ["철수", "영희", "훈이"].map(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //     return `${el}어린이`;
  //   });

  //   3.번방법(매개변수 바꿔보기)
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("el", asdf);
  //     console.log("index", qwer);
  //   });

  //  4.el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el", index);
    console.log("index", el);
  });

  return <> </>;
}
