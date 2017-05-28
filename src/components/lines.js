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

export function Grid(props) {
  const { width, height, scale } = props

  let verticalLines = []
  for (let i = 1; i <= width; i++) {
    const coords = [{x: i, y: 0}, {x: i, y: height}]
    const line = <Line key={"v" + i} scale={scale} coords={coords} />
    verticalLines.push(line)
  }
  let horizontalLines = []
  for (let i = 1; i <= height; i++) {
    const coords = [{x: 0, y: i}, {x: width, y: i}]
    const line = <Line key={"h" + i} scale={scale} coords={coords} />
    horizontalLines.push(line)
  }
  return (
    <g className="grid-lines">
      {verticalLines}
      {horizontalLines}
    </g>
    )
}

export function CenterBack(props) {
    return (
      <Line {...props} coords={[points.o, points.hipLineA]} />
      )
};

export function CenterFront(props) {
    return (
      <Line {...props} coords={[points.frontO, points.hipLineB]} />
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

export function StraightUnderarmSeam(props) {
    return (
      <Line {...props} coords={[points.underArmPoint, points.hipPoint]} />
      )
};

export function FrontShoulderLine(props) {
    return (
      <Line {...props} coords={[points.frontShoulderLineA, points.frontShoulderLineB]} />
      )
};

export function ChestLine(props) {
    return (
      <Line {...props} coords={[points.chestLineA, points.chestLineB]} />
      )
};

export function FrontNeckLineBase(props) {
    return (
      <Line {...props} coords={[points.frontNeckLineBaseA, points.frontNeckLineBaseB]} />
      )
};

export function FrontNeckLine(props) {
  const constructionPoints = [
    points.frontNeckPoint,
    // {x: points.frontNeckPoint.x + Math.sqrt(4.5),
    //   y: points.frontNeckLineBase - Math.sqrt(4.5)},
    {x: points.frontNeckPoint.x + 2,
      y: points.frontNeckLineBase - 2},
    {x: points.frontNeckLineBaseA.x - 1,
      y: points.frontNeckLineBaseA.y},
    points.frontNeckLineBaseA
  ]
  return (
    <CurvedLine {...props} coords={constructionPoints} curveFunc={d3.curveNatural}/>
    )
}

export function FrontShoulderSeam(props) {
    return (
      <Line {...props} coords={[points.frontNeckPoint, points.frontShoulderSeamB]} />
      )
};

export function FrontVerticalReference(props) {
    return (
      <Line {...props} coords={[points.frontVertReferenceA, points.frontVertReferenceB]} />
      )
};

export function ShoulderInnerDartLine(props) {
    return (
      <Line {...props} coords={[points.innerShoulderDartLineA, points.innerShoulderDartLineB]} />
      )
};

export function ShoulderOuterDartLine(props) {
    return (
      <Line {...props} coords={[points.outerShoulderDartLineA, points.outerShoulderDartLineB]} />
      )
};

