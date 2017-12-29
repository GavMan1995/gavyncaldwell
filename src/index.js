import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const GRAPHCSM_LINK = 'https://api.graphcms.com/simple/v1/cjbphtr9e2mva01533e977f73'

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHCSM_LINK
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
