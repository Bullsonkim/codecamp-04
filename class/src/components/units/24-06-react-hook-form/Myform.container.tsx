import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { schema } from "./Myform.validations";
import { FormValues } from "./Myform.types";
import React from "react";
import MyformUI from "./Myform.presenter";

export default function Myform() {
  // onChange 발생 시 검증 발생
  // formState 에러가 담겨있음
  function onClickLogin(data: FormValues) {
    console.log(data);
  }
  // loginuUser API 요청하기!

  return <MyformUI onClickLogin={onClickLogin} />;
}
