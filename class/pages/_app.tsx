import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 내컴퓨터에 임시저장
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      {/* //각 페이지 컴포넌트 */}
    </ApolloProvider>
  );
}

export default MyApp;
