import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  // return <>{FunctionalComponentUI({ count: 3 })}</>;
  return <FunctionalComponentUI count={3} />;
  //   모두 차이가 없음
}
