import React, { Component } from 'react';
import * as d3 from 'd3'
import * as Lines from './lines.js'

const pageWidth = 68
const pageHeight = 68

class Chart extends Component {
  constructor() {
    super()

    this.scales = this.scales.bind(this)
  }

  scales() {
    const {width, height} = this.props
    const scaleX = d3.scaleLinear()
      .range([0, width])
      .domain([0, pageWidth])
    const scaleY = d3.scaleLinear()
      .range([0, height])
      .domain([0, pageHeight])
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
          <Lines.Grid scale={this.scales()} width={pageWidth} height={pageHeight} />
          <Lines.CenterBack scale={this.scales()} className={"cb"} />
          <Lines.CenterFront scale={this.scales()} className={"cf"} />
          <Lines.WaistLine scale={this.scales()} className={"wl"} />
          <Lines.HipLine scale={this.scales()} className={"wl"} />
          <Lines.BustLine scale={this.scales()} className={"wl"} />
          <Lines.BackLine scale={this.scales()} className={"wl"} />
          <Lines.ShoulderLine scale={this.scales()} className={"wl"} />
          <Lines.NeckLine scale={this.scales()} className={"wl"} />
          <Lines.ArmholeConstructionLine scale={this.scales()} className={"wl"} />
          <Lines.ShoulderSeam scale={this.scales()} className={"wl"} />
          <Lines.BackArmhole scale={this.scales()} className={"wl"} />
          <Lines.StraightUnderarmSeam scale={this.scales()} className={"wl"} />
          <Lines.BackShapedUnderarmSeam scale={this.scales()} className={"wl"} />

          
          <Lines.FrontShoulderLine scale={this.scales()} className={"wl"} />
          <Lines.ChestLine scale={this.scales()} className={"wl"} />
          <Lines.FrontNeckLineBase scale={this.scales()} className={"wl"} />
          <Lines.FrontNeckLine scale={this.scales()} className={"wl"} />
          <Lines.FrontShoulderSeam scale={this.scales()} className={"wl"} />
          <Lines.FrontVerticalReference scale={this.scales()} className={"wl"} />
          <Lines.ShoulderInnerDartLine scale={this.scales()} className={"wl"} />
          <Lines.ShoulderOuterDartLine scale={this.scales()} className={"wl"} />

          
          <Lines.FrontShoulderSeamRA scale={this.scales()} className={"rotated"} />
          <Lines.FrontShoulderSeamRB scale={this.scales()} className={"rotated"} />
          <Lines.DartLine scale={this.scales()} className={"rotated midline"} />
          <Lines.DartMidline scale={this.scales()} className={"rotated midline"} />
          <Lines.FrontArmGuideA scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmGuideB scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmGuideC scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmhole scale={this.scales()} className={"guide-line"} />
          <Lines.FrontStraightUnderarmSeam scale={this.scales()} className={"guide-line"} />
          <Lines.FrontShapedUnderarmSeam scale={this.scales()} className={"special"} />
        </svg>
      </div>
      )
  }
}

export default Chart;
