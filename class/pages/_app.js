import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache() // 내컴퓨터에 임시저장
  })

  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} /> 
    {/* //각 페이지 컴포넌트 */}
  </ApolloProvider>

  )
}

export default MyApp
