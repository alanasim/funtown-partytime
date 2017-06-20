import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMeasurement } from '../actions/index.js';
import sizes from '../sizes.js';

class SelectSize extends Component {
  constructor() {
    super()

    this.state = {
      value: 'IV'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.changeMeasurement(sizes[e.target.value])
    this.setState({value: e.target.value})
  }

  render() {

    return (
      <div>
        <label htmlFor="select-size">Select size:</label>
        <select name="select-size" value={this.state.value} onChange={this.handleChange}>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
        </select>
      </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeMeasurement }, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectSize);
