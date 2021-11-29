import { FoodImg, Wrapper, Refresh } from "./openapi.styles";
import { IOpenapiListUIProps } from "./openapi.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  return (
    <>
      <Wrapper>
        <div>
          {props.imgUrls.map((el, index) => (
            <>
              <FoodImg key={el} src={el} />
              {(index + 1) % 3 === 0 && <br />}
            </>
          ))}
        </div>
      </Wrapper>
      <Refresh onClick={props.onClickRefresh}>🍎 다른 음식 구경 🍽</Refresh>
    </>
  );
}
