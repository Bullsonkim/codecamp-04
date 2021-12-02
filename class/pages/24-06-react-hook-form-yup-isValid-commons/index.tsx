import { useForm } from "react-hook-form";

import styled from "@emotion/styled";

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

interface FormValues {
  myEmail: string;
  myPassword: string;
}
export default function ReactHookFormPage() {
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton isValid={formState.isValid}>로그인하기 </MyButton>
    </form>
  );
}
