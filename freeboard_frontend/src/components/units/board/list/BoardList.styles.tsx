import { IBoardListStylesProps } from "./BoardWrite.types";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  text-align: center;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props: IBoardListStylesProps) =>
    props.isMatched ? "red" : "black"};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const WrapperBest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Bestbackground = styled.div`
  width: 282px;
  height: 257px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 10px;
`;

export const BestPicture = styled.div`
  width: 100%;
  height: 120px;
  background-color: #b2c7d9;
`;

export const MyTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const WrapperGroup = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 80px;
`;

export const WrapperLeft = styled.div`
  text-align: left;
  padding-left: 10px;
`;

export const BestWriter = styled.div``;

export const LikePicture = styled.div``;

export const BestDate = styled.div``;
export const Bestlike = styled.div``;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 10px;
`;

export const BestTitle = styled.div`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;
