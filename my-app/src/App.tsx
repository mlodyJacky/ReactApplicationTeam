import React from 'react';
import logo from './bananki.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://asset.kompas.com/crops/-jM7LFoXlqryLUx345-RtbDxAsg=/0x0:1600x800/750x500/data/photo/2020/05/31/5ed3a33d6f95d.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
