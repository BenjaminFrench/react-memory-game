import React, { Component } from 'react';
import MemoryGrid from './memory-grid/memory-grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoryGrid/>
      </div>
    );
  }
}

export default App;
