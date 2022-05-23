import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { InMemoryCache, ApolloClient, createHttpLink, split, ApolloProvider } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  uri: 'http://localhost:3100'
})
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3100/graphql',
  options: {
    reconnect: true
  }
})

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query)
  if (definition.kind === 'OperationDefinition' &&
  definition.operation === 'subscription') {
    console.log('query', {
      query,
      definition
    })
  }

  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  )
}, wsLink, httpLink)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
