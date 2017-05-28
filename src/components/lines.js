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


