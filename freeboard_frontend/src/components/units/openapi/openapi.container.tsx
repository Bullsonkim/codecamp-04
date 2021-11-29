import axios from "axios";
import { useEffect, useState } from "react";
import OpenapiListUI from "./openapi.presenter";

export default function OpenapiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(3).fill(1).forEach(async (_) => {
        const result: any = await axios.get(
          "https://foodish-api.herokuapp.com/api/"
        );
        setImgUrls((prev) => [...prev, result.data.image]);
      });
    };
    getImg();
  }, []);

  function onClickRefresh() {
    window.location.reload();
  }

  return <OpenapiListUI imgUrls={imgUrls} onClickRefresh={onClickRefresh} />;
}

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function OpenapiWithUSeEffectPage() {
//   const [coffeeUrl, setcoffeeUrl] = useState("");

//   useEffect(() => {
//     async function fetchCoffee() {
//       const result: any = await axios.get(
//         "https://foodish-api.herokuapp.com/api/"
//       );
//       console.log("asdfasdf", result);
//       // console.log(result);
//       setcoffeeUrl(result.data.image);
//     }

//     fetchCoffee();
//   }, []);

//   return (
//     <>
//       <img src={coffeeUrl} />
//     </>
//   );
// }
