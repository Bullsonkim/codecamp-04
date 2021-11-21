import styled from "@emotion/styled";
import { Rate } from "antd";

export const WrapperTop = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-top: 20px;
  display: flex;
  align-items: row;
`;

export const Title = styled.div`
  padding-left: 20px;
  font-size: 30px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  background-color: #b2c7d9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px;
`;

export const Star = styled(Rate)``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 90px;
  width: 80%;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  width: 95%;
  display: flex;
  align-items: center;
  padding-left: 90px;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
  border-radius: 10px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  border-radius: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 200px;
  height: 100px;
  background-color: #fef01b;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 0px 10px gray;
`;
