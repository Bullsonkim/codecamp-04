import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.container";

export const MyContext = createContext(null);
export default function ContextAPIPage() {
  const myValue = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={myValue}>
      <MyBoardWrite />;
    </MyContext.Provider>
    // provider 원하는 데이터를 제공
  );
}
