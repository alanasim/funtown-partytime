import React, { Component } from 'react';
import Chart from './components/chart.js';
import Options from './components/options.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Options />
        <Chart width={600} height={600}/>
      </div>
    );
  }
}

export default App;
