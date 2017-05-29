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

    const path = g.append('path')
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

    const pathEl = path.node()
    if(className == "special") {
      const pathLength = pathEl.getTotalLength()
      const testTarget = pathEl.getPointAtLength(scale.y(2))
      let start = 0
      let end = pathLength
      let finalPoint;
      let targetY = scale.y(43)
      while (finalPoint == undefined) {
        let targetLength = (Math.floor((start + end) / 2))
        let pos = pathEl.getPointAtLength(targetLength)
        if ((targetLength === end || targetLength === start) && pos.y !== targetY) {
            finalPoint = pos;
            console.log({x: scale.x.invert(pos.x), y: scale.y.invert(pos.y)})
        }
        if (pos.y > targetY) {end = targetLength}
        else if (pos.y < targetY) {start = targetLength}
        else {
          finalPoint = pos
        } //position found
      }
      g.append('g')
        .attr('class', 'test-target')
        .append("circle")
        .datum(finalPoint)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 2.5)
        .style("fill", "orange")
    }
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
      <Line {...props} coords={[points.newInnerShoulderDartLineA, points.innerShoulderDartLineB]} />
      )
};

export function ShoulderOuterDartLine(props) {
    return (
      <Line {...props} coords={[points.newOuterShoulderDartLineA, points.outerShoulderDartLineB]} />
      )
};

export function RotationTest(props) {
    return (
      <Line {...props} coords={[points.frontNeckPoint, points.frontShoulderPointR]} />
      )
};

export function RotationTestII(props) {
    return (
      <Line {...props} coords={[points.chestPoint, points.chestPointB]} />
      )
};

export function FrontShoulderSeamRA(props) {
    return (
      <Line {...props} coords={[points.newInnerShoulderDartLineA, points.frontNeckPoint]} />
      )
};

export function FrontShoulderSeamRB(props) {
    return (
      <Line {...props} coords={[points.extendedDartMidlineA, points.frontShoulderPoint]} />
      )
};

export function DartMidline(props) {
    return (
      <Line {...props} coords={points.extendedDartMidline} />
      )
};

export function DartLine(props) {
    return (
      <Line {...props} coords={[points.extendedDartMidlineA, points.newInnerShoulderDartLineA]} />
      )
};

export function FrontArmGuideA(props) {
    return (
      <Line {...props} coords={[points.frontShoulderPoint, points.chestPoint]} />
      )
};

export function FrontArmGuideB(props) {
    return (
      <Line {...props} coords={[points.chestPoint, {x: points.chestPoint.x, y: points.bustLine}]} />
      )
};

export function FrontArmGuideC(props) {
    return (
      <Line {...props} coords={[points.frontArmRefA, points.frontArmRefB]} />
      )
};

export function FrontArmhole(props) {
  const constructionPoints = [
    points.frontShoulderPoint,
    points.frontArmRefB,
    points.chestPoint,
    points.frontArmRefC,
    {x: points.frontUnderarmPoint.x + 1.5,
      y: points.bustLine + 0.5},
    points.frontUnderarmPoint
  ]
  return (
    <CurvedLine {...props} coords={constructionPoints} curveFunc={d3.curveBasis}/>
    )
}

export function FrontStraightUnderarmSeam(props) {
    return (
      <Line {...props} coords={points.frontStraightUnderarmSeam} />
      )
};

export function BackShapedUnderarmSeam(props) {
  const constructionPoints = [
    points.underArmPoint,
    points.backOuterWaistPoint,
    points.hipPoint
  ]
  return (
    <CurvedLine {...props} coords={constructionPoints} curveFunc={d3.curveMonotoneY}/>
    )
}

export function FrontShapedUnderarmSeam(props) {
  const constructionPoints = [
    points.frontUnderarmPoint,
    points.frontOuterWaistPoint(),
    points.frontHipPoint
  ]
  return (
    <CurvedLine {...props} coords={constructionPoints} curveFunc={d3.curveNatural}/>
    )
}
