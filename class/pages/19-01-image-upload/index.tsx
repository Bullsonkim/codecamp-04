import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    // files 배열이 있으면 배열 0번째를 가져옴
    console.log(myFile);
    // 여러 이미지를 선택하는 경우가 있기때문에 배열 0 선언

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
  }
  return <input type="file" onChange={onChangeFile} />;
}
