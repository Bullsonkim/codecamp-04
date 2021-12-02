import { useState } from "react";
import MarketRegisterUI from "./MarketRegister.presenter";
import { CREATE_ITEM } from "./MarketRegister.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function MarketRegister() {
  const router = useRouter();

  const [myName, setMyItem] = useState("");
  const [myRemarkrs, setMyRemakrs] = useState("");
  const [myContents, SetMyContents] = useState("");
  const [myPrice, SetMyPrice] = useState("");
  const [myTag, setMyTag] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: "",
    tags: "",
    images: "",
  });

  const [isActive, setIsActive] = useState(false);

  const [myNameError, setMyNameError] = useState("");
  const [myRemarkrsError, setmyRemarkrsError] = useState("");
  const [myContentsError, setMymyContents] = useState("");

  const [createItem] = useMutation(CREATE_ITEM);

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyItem(event.target.value);
    if (event.target.value !== "") {
      setMyNameError("");
    }

    if (event.target.value !== "" && myRemarkrs !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemakrs(event.target.value);
    if (event.target.value !== "") {
      setmyRemarkrsError("");
    }

    if (myName !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyRemakrs(event.target.value);
    if (event.target.value !== "") {
      setMymyContents("");
    }

    if (myName !== "" && myRemarkrs !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    SetMyPrice(event.target.value);
  }

  function onChangeMyTag(event: ChangeEvent<HTMLInputElement>) {
    setMyTag(event.target.value);
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrl];
    newFileUrls[index] = fileUrl;
    setFileUrl(newFileUrls);
  }

  async function onClickSubmit() {
    if (!myName) {
      setMyNameError("");
    }
    if (!myRemarkrs) {
      setmyRemarkrsError("비밀번호를 입력해주세요.");
    }
    if (!myContents) {
      setMymyContents("제목을 입력해주세요.");
    }

    if (myName && myRemarkrs && myContents) {
      const result = await createItem({
        variables: { ...myInputs },
      });

      // router.push(`/boards/${result.data.createUseditem._id}`);
      console.log(result);
    }
  }

  return <MarketRegisterUI />;
}
