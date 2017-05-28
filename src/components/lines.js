import React, { Component } from 'react';
import * as d3 from 'd3'
import * as points from '../points.js'

class Line extends Component {
  componentDidMount() {
    const {scale, coords, className} = this.props
    const g = d3.select(this.gElem)

    const line = d3.line()
      .x(d => scale.x(d.x))
      .y(d => scale.y(d.y))

    g.append('path')
        .datum(coords)
        .attr('class', className)
        .attr('stroke', 'black')
        .attr('stroke-width', 1.5)
        .attr('d', line)
  }

  render() {

    return (
      <g ref={(g) => this.gElem = g}>
      </g>
      )
  }
}

class CurvedLine extends Component {
  componentDidMount() {
    const {scale, coords, curveFunc, className} = this.props
    const g = d3.select(this.gElem)

    const line = d3.line()
      .x(d => scale.x(d.x))
      .y(d => scale.y(d.y))
      // .curve(d3.curveBasis)
      .curve(curveFunc)

    g.append('path')
        .datum(coords)
        .attr('class', className)
        .attr('stroke', 'black')
        .attr('stroke-width', 1.5)
        .attr('fill', 'none')
        .attr('d', line)

    g.append('g')
      .attr('class', 'test')
      .selectAll("circle")
      .data(coords)
      .enter()
      .append("circle")
      .attr("cx", d => scale.x(d.x))
      .attr("cy", d => scale.y(d.y))
      .attr("r", 2.5)
      .style("fill", "blue")
  }

  render() {

    return (
      <g ref={(g) => this.gElem = g}>
      </g>
      )
  }
}

export function CenterBack(props) {
    return (
      <Line {...props} coords={[points.o, points.hipLineA]} />
      )
};

export function WaistLine(props) {
    return (
      <Line {...props} coords={[points.waistLineA, points.waistLineB]} />
      )
};

export function HipLine(props) {
    return (
      <Line {...props} coords={[points.hipLineA, points.hipLineB]} />
      )
};

export function BustLine(props) {
    return (
      <Line {...props} coords={[points.bustLineA, points.bustLineB]} />
      )
};

export function BackLine(props) {
    return (
      <Line {...props} coords={[points.backLineA, points.backLineB]} />
      )
};

export function ShoulderLine(props) {
    return (
      <Line {...props} coords={[points.shoulderLineA, points.shoulderLineB]} />
      )
};

export function NeckLine(props) {
  return (
    <CurvedLine {...props} coords={[points.o, {x: points.neckPoint.x - 2.5, y: points.o.y - 0.25}, points.neckPoint]} curveFunc={d3.curveBasis}/>
    )
}

export function ArmholeConstructionLine(props) {
    return (
      <Line {...props} coords={[points.armConstructionLineA, points.armConstructionLineB]} />
      )
};

export function ShoulderSeam(props) {
    return (
      <Line {...props} coords={[points.shoulderSeamA, points.shoulderSeamB]} />
      )
};

export function BackArmhole(props) {
  const constructionPoints = [
    points.shoulderPoint,
    {x: points.vertArmConstructionLine,
      y: points.backLine},
    {x: points.vertArmConstructionLine,
      y: points.backLine + 3},
    {x: points.vertArmConstructionLine + Math.sqrt(4.5),
      y: points.bustLine - Math.sqrt(4.5)},
    points.underArmPoint
  ]
  return (
    <CurvedLine {...props} coords={constructionPoints} curveFunc={d3.curveMonotoneY}/>
    )
}

