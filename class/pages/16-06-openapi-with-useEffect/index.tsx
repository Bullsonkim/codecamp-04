import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUSeEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    }

    fetchDog();
  }, []);

  return (
    <>
      <div>오픈 API연습!</div>
      <img src={dogUrl} />
    </>
  );
}
