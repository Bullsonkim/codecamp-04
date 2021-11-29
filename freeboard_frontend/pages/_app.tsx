import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/dist/shared/lib/router/router";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Pp42tYeBDOZMADVOP3o2EQHG-PoxUp0",
  authDomain: "codecamp-jr.firebaseapp.com",
  projectId: "codecamp-jr",
  storageBucket: "codecamp-jr.appspot.com",
  messagingSenderId: "107701837723",
  appId: "1:107701837723:web:fe2a5441048e5a36434b3e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),
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