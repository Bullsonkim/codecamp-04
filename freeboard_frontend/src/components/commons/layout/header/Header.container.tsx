import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Header() {
  const router = useRouter();

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element) router.push(event.target.id);
  }

  return <HeaderUI onClickMenu={onClickMenu} />;
}
