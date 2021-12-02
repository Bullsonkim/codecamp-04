import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/commons/hocs/withAuth";
import { useContext } from "react";
import { GlobalContext } from "../_app";

function LoginSuccessPage() {
  const { userInfo } = useContext(GlobalContext);

  // gql을 작성하지 않고 globalconetxt에서 가져가 쓸수 있음

  return (
    <>
      <h1>로그인에 성공하였습니다!</h1>
      <h2>{userInfo?.email}</h2>
      <h2>{userInfo?.name} 님</h2>
    </>
  );
}

export default withAuth(LoginSuccessPage);
