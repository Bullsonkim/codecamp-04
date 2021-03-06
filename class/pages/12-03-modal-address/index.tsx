import { useState } from “react”;
import { Modal, Button } from “antd”;
import DaumPostcode from “react-daum-postcode”;

export default function ModalBasciPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
// const [myAddressDetail,setMyAdress] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen(false); //모달을 삭제하는것이 아니라 숨김처리 한다.
  };
  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}{myAddressDetail}</div>
      <div>내우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

// isModalVisible 숨김처리 클릭했을떄 true
// 조건부 랜더링 - isModalVisible && true 다시 그려지며 초기화 (전에 입력한 데이터가 초기화 됨)
// 용도에 따라 초기화/유지 설정
