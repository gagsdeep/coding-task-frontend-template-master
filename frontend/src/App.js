import React from 'react';
import './App.css';
import KeywordManager from './components/KeywordManager'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Config from './config';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <KeywordManager />
      </div>
    </ApolloProvider>
  )
}