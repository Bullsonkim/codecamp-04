import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUSeEffectPage() {
  const [coffeeUrl, setcoffeeUrl] = useState("");

  useEffect(() => {
    async function fetchCoffee() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      // console.log(result);
      setcoffeeUrl(result.data.message);
    }

    fetchCoffee();
  }, []);

  return (
    <>
      <img src={coffeeUrl} />
    </>
  );
}
