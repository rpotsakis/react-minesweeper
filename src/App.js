import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

import {m} from './data/large.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Minesweeper</h1>
        </header>
        <p className="App-intro">
          To get started, click a block.<br />
          <small>right-click a block to flag it (mac: command + left-click)</small>
        </p>
        <Board boardSize={m.length} boardData={m} />
      </div>
    );
  }
}

export default App;
