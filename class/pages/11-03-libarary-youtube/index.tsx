import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;

export default function LibaryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={500}
      hight={500}
    />
  );
}
