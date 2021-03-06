import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  border-radius: 10px;
  align-content: center;
  margin: 300px;
`;
export const Email = styled.input`
  width: 500px;
  height: 100px;
  border-radius: 10px;
`;

export const Password = styled.input`
  width: 500px;
  height: 100px;
  border-radius: 10px;
`;

export const LoginBtn = styled.button`
  border-radius: 15px;
  width: 500px;
  height: 100px;
  background-color: yellow;
  font-size: 50px;
  margin: 50px;
`;

export const MailWrapper = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  font-size: 50px;
  background-color: white;
`;

export const PasswordWrapper = styled.button`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  background-color: white;
  border: none;
`;

export const Title = styled.div`
  font-size: 80px;
`;
