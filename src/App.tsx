import React from 'react';
import './App.css';
import Home from './components/Home';
import { ApolloProvider } from '@apollo/client';
import client from './components/graphql/apolloClient';
import Countries from './components/graphql/Countries';

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>App Component</h1>
      <Countries />
      <Home />
    </div>
    </ApolloProvider>
  );
}

export default App;
