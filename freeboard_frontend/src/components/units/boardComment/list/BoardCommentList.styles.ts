import styled from "@emotion/styled";
import { Rate } from "antd";

export const BackgroundWrapper = styled.div`
  padding-left: 50px;
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 50px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
  background-color: #b2c7d9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 90%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  width: 1100px;
  height: 50px;
  background-color: white;
  padding-left: 20px;
  border-radius: 10px;
`;

export const OptionWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  padding-right: 90px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: black;
  padding-top: 10px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const InfiniteScroll = styled.div``;
