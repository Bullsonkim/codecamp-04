import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasciPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기!</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력: <input type="password" />
        <p>안녕하세요</p>
        <p>곤니찌와</p>
        <p>헬로</p>
      </Modal>
    </>
  );
}
