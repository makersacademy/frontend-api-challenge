import React from 'react';
import logo from '../../logo.svg';
import Classes from './App.module.css';

function App() {
  return (
    <div className={Classes.App}>
      <header className={Classes["App-header"]}>
        <img src={logo} className={Classes["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={Classes["App-link"]}
          href="https://reactjs.org"
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
