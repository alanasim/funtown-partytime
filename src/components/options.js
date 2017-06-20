import React, { Component } from 'react';
import SelectSize from './select_size.js';
import MeasurementAdjustments from './measurement_adjustments.js';

class Options extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div className="options-container">
        <SelectSize />
        <MeasurementAdjustments />
      </div>
      )
  }
}


export default Options;
