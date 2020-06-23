import React from 'react';
import Header from "./components/Header";

// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
