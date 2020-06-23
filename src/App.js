import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';
import Footer from "./components/Footer";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
