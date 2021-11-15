import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  background-color: #b2c7d9;
  border-radius: 15px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: none;
  background-color: yellow;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 50px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 50px;
  padding-left: 15px;
`;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  background: white;
  border-radius: 15px;
  padding-left: 50px;
`;

export const Title = styled.h1`
  padding-top: 80px;
  padding-left: 20px;
  font-size: 40px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  padding-left: 20px;
  font-size: 30px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
  border-radius: 15px;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const CommentWrapper = styled.div`
  width: 100px;
  height: 200px;
  border: 1px;
`;

export const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;
export const Likeicon = styled(LikeOutlined)`
  font-size: 80px;
  color: white;
`;
export const Dislikeicon = styled(DislikeOutlined)`
  font-size: 80px;
  color: red;
`;
