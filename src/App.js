import React, { Component } from 'react';
import Chart from './components/chart.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart width={800} height={800}/>
      </div>
    );
  }
}

export default App;
