import * as yup from "yup";

export const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 반드시 입력해야 하는 필수 사항입니다."),
  // if문 검증
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다")
    .max(15, "비밀번호는 최대 15자리 까지 입니다.")
    .required("비밀번호는 반드시 입력해야 하는 필수 사항입니다."),
});
