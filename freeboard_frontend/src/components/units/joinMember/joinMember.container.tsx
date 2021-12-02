import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import JoinMemberUI from "./joinMember.presenter";
import { CREATE_USER } from "./joinMember.queries";
import { IJoinUIProps } from "./joinMember.types";

export default function joinMember(props: IJoinUIProps) {
  const router = useRouter();
  const [myName, setMyname] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [myNameError, setMyNameError] = useState("");
  const [myEmailError, setMyEmailError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  function onChangeMyname(event: ChangeEvent<HTMLInputElement>) {
    setMyname(event.target.value);
    if (event.target.value !== "") {
      setMyNameError("");
    }
  }

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setMyEmailError("");
    }
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }
  }

  async function onClickSubmit() {
    // let count = 0;
    if (!myName) {
      setMyNameError("이름을 입력해주세요!");
    }

    if (!myEmail || /\w+@\w+\.\w+/.test(myEmail) === false) {
      setMyEmailError("이메일을 확인해 주세요!");
    }
    if (!myPassword || myPassword.length < 5) {
      setMyPasswordError("비밀번호를 5자이상 입력해 주세요!");
    }
    // if (count !== 0) {
    //   return;
    // }
    if (myName && myPassword && myEmail) {
      const result = await createUser({
        variables: {
          createUserInput: {
            name: myName,
            email: myEmail,
            password: myPassword,
          },
        },
      });
      console.log(result);
      alert("회원가입이 완료되었습니다!");
      router.push("/boards");
    }
  }

  return (
    <JoinMemberUI
      myName={myName}
      myEmail={myEmail}
      myPassword={myPassword}
      myNameError={myNameError}
      myEmailError={myEmailError}
      myPasswordError={myPasswordError}
      onChangeMyname={onChangeMyname}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      onClickSubmit={onClickSubmit}
    />
  );
}
