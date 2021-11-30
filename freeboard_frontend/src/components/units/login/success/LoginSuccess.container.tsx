import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import LoginSuccessUI from "./LoginSuccess.presenter";
import { FETCH_USER_LOGGED_IN } from "./LoginSuccess.queries";

export default function LoginSuccessPage(props: any) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <LoginSuccessUI data={data} />;
}
