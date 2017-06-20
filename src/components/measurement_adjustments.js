import React, { Component } from 'react';
import MeasurementInput from './measurement_input.js';

class MeasurementAdjustments extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
        <MeasurementInput label="Shoulder" measurementKey="shoulder" />
        <MeasurementInput label="Length to Waist" measurementKey="lengthToWaist" />
      </div>
      )
  }
}


export default MeasurementAdjustments;
