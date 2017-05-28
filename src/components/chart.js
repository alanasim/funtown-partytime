import React, { Component } from 'react';
import * as d3 from 'd3'
import {CenterBack, WaistLine} from './lines.js'

class Chart extends Component {
  constructor() {
    super()

    this.scales = this.scales.bind(this)
  }

  scales() {
    const {width, height} = this.props
    const scaleX = d3.scaleLinear()
      .range([0, width])
      .domain([0, 68])
    const scaleY = d3.scaleLinear()
      .range([0, height])
      .domain([0, 68])
    return {
      x: scaleX,
      y: scaleY
    }
  }

  render() {
    const {width, height} = this.props

    return (
      <div className="chart-wrapper">
        <svg width={width} height={height} ref={(el) => this.svgEl = el}>
          <CenterBack scale={this.scales()} className={"cb"} />
          <WaistLine scale={this.scales()} className={"wl"} />
        </svg>
      </div>
      )
  }
}

export default Chart;
