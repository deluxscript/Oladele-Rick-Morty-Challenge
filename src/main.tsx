import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { App } from './App'

import './index.scss'

const appElement = document.getElementById('root')
const GRAPHQL_URI = import.meta.env.VITE_API_GRAPHQL_URI

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache()
})

if (appElement) {
  const root = createRoot(appElement)
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
