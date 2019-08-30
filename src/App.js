import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { TodaysDate } from 'shared-react-components'
import { ErrorComponent } from 'discovery'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodaysDate /> */}
        <ErrorComponent errorText="stuff" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
