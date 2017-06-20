import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMeasurement } from '../actions/index.js';
import sizes from '../sizes.js';

class MeasurementInput extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { measurementKey } = this.props
    this.props.changeMeasurement({[measurementKey]: Number.parseFloat(e.target.value)})
  }

  render() {
    const { value, measurementKey, label } = this.props
    return (
      <div>
        <label htmlFor={"input-" + measurementKey}>{label}</label>
        <input name={"input-" + measurementKey} type="number" step="0.5" value={value} onChange={this.handleChange} />
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.measurements[ownProps.measurementKey]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeMeasurement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementInput);
