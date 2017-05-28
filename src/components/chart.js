import React, { Component } from 'react';
import * as d3 from 'd3'
import * as Lines from './lines.js'

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
          <Lines.CenterBack scale={this.scales()} className={"cb"} />
          <Lines.WaistLine scale={this.scales()} className={"wl"} />
          <Lines.HipLine scale={this.scales()} className={"wl"} />
          <Lines.BustLine scale={this.scales()} className={"wl"} />
          <Lines.BackLine scale={this.scales()} className={"wl"} />
          <Lines.ShoulderLine scale={this.scales()} className={"wl"} />
          <Lines.NeckLine scale={this.scales()} className={"wl"} />
          <Lines.ArmholeConstructionLine scale={this.scales()} className={"wl"} />
          <Lines.ShoulderSeam scale={this.scales()} className={"wl"} />
          <Lines.BackArmhole scale={this.scales()} className={"wl"} />
        </svg>
      </div>
      )
  }
}

export default Chart;
