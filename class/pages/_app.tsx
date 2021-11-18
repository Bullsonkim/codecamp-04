import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 내컴퓨터에 임시저장
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
        {/* //각 페이지 컴포넌트 */}
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
