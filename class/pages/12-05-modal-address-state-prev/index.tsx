import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalBasciPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  // const [myAddressDetail,setMyAdressDetail]

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev)  => !prev);
  // };
  // //기존에 있는값을 역으로 변경
  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // prev 값을 가져와서 역으로 변경 / false -> true

  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내주소: {myAddress}</div>
      <div>내우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

// 모달을 삭제하는것이 아니라 숨김처리 한다.

/* // isModalVisible 숨김처리 클릭했을떄 true
// 조건부 랜더링 - isModalVisible && true 다시 그려지며 초기화 (전에 입력한 데이터가 초기화 됨)
// 용도에 따라 초기화/유지 설정 */
// 데이터 유지
// visible={isModalVisible}
// isModalVisible 숨김처리 - true
// 조건부 랜더링 - isModalVisible && true 다시 그려지며 초기화 (전에 입력한 데이터가 초기화 됨)
// 용도에 따라 초기화/유지 설정
