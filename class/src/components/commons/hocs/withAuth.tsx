import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 한 사람만 입장 가능합니다! 로그인을 먼저 해주세요!");
      router.push("/23-04-login");
    }
  }, []);
  return <Component {...props} />;
};
