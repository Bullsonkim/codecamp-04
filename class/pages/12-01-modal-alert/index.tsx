import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSucess() {
    Modal.success({ content: "게시물 등록에 성공 했습니다!!!" });
  }
  function onClickFail() {
    Modal.error({ content: "게시물 등록에 실패 했습니다!!!" });
  }

  return (
    <>
      <button onClick={onClickSucess}>알림창 나타나기!!(성공)</button>
      <button onClick={onClickFail}>알림창 나타나기!!(실패)</button>
    </>
  );
}
