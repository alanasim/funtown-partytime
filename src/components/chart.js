import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as d3 from 'd3'
import { getPoints } from '../points.js'
import * as Lines from './lines.js'

const pageWidth = 68
const pageHeight = 68

class Chart extends Component {
  constructor() {
    super()

    this.state = {
      keyIdx: 0
    }

    this.scales = this.scales.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.points !== nextProps.points) {
      this.setState({keyIdx: this.state.keyIdx + 1})
    }
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
    const {width, height, points} = this.props
    console.log(points)

    return (
      <div className="chart-wrapper">
        <svg width={width} height={height} ref={(el) => this.svgEl = el} key={this.state.keyIdx}>
          <Lines.Grid scale={this.scales()} width={pageWidth} height={pageHeight} />
          <Lines.CenterBack points={points} scale={this.scales()} className={"cb"} />
          <Lines.CenterFront points={points} scale={this.scales()} className={"cf"} />
          <Lines.WaistLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.HipLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.BustLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.BackLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.ShoulderLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.NeckLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.ArmholeConstructionLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.ShoulderSeam points={points} scale={this.scales()} className={"wl"} />
          <Lines.BackArmhole points={points} scale={this.scales()} className={"wl"} />
          <Lines.StraightUnderarmSeam points={points} scale={this.scales()} className={"wl"} />
          <Lines.BackShapedUnderarmSeam points={points} scale={this.scales()} className={"wl"} />

          
          <Lines.FrontShoulderLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.ChestLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.FrontNeckLineBase points={points} scale={this.scales()} className={"wl"} />
          <Lines.FrontNeckLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.FrontShoulderSeam points={points} scale={this.scales()} className={"wl"} />
          <Lines.FrontVerticalReference points={points} scale={this.scales()} className={"wl"} />
          <Lines.ShoulderInnerDartLine points={points} scale={this.scales()} className={"wl"} />
          <Lines.ShoulderOuterDartLine points={points} scale={this.scales()} className={"wl"} />

          
          <Lines.FrontShoulderSeamRA points={points} scale={this.scales()} className={"rotated"} />
          <Lines.FrontShoulderSeamRB points={points} scale={this.scales()} className={"rotated"} />
          <Lines.DartLine points={points} scale={this.scales()} className={"rotated midline"} />
          <Lines.DartMidline points={points} scale={this.scales()} className={"rotated midline"} />
          <Lines.FrontArmGuideA points={points} scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmGuideB points={points} scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmGuideC points={points} scale={this.scales()} className={"guide-line"} />
          <Lines.FrontArmhole points={points} scale={this.scales()} className={"guide-line"} />
          <Lines.FrontStraightUnderarmSeam points={points} scale={this.scales()} className={"guide-line"} />
          <Lines.FrontShapedUnderarmSeam points={points} scale={this.scales()} className={"special"} />
        </svg>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    points: getPoints(state)
  }
}

export default connect(mapStateToProps)(Chart);
