import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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
    const [, setMyImages] = useState<string[]>([]);

    const myFile = event.target.files?.[0];
    // files 배열이 있으면 배열 0번째를 가져옴
    // 여러 이미지를 선택하는 경우가 있기때문에 배열 0 선언
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다!!");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다!(용량제한:5MB)");
      return;
    }
    // 5메가 용량 제한 기가는 5*1024*1024*1024

    if (!myFile.type.includes("jepg") || !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }
  return <input type="file" onChange={onChangeFile} />;
}
