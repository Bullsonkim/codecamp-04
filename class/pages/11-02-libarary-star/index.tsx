import { useState } from "react";
import { Rate } from "antd";

export default function LibarayStarPage() {
  const [value, setValue] = useState(3);

  function handleChagne(value: number) {
    setValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChagne} value={value} />
      {/* //value 초기값 */}
    </span>
  );
}
