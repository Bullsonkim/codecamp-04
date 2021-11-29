import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px;
  margin: 100px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  /* display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray; */
  width: 700px;
  height: 150px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 10px;
  background-color: #b2c7d9;
  margin: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 20px;
`;

export const ColumnBasic = styled.div`
  width: 80%;
  padding-top: 10px;
  font-size: 20px;
`;

export const ColumnTitle = styled.div`
  width: 100%;
  font-size: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: yellow;
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

export const ColumnWriter = styled.div``;
