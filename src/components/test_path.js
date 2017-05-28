import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class TestPath extends Component {
  render() {
    let {x, y} = this.props

    let node = ReactFauxDOM.createElement('g')
    let g = d3.select(node)

    const lineData = [{x: 100, y: 100}, {x: 500, y: 100}]

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y))

    // let g = d3.select(node)


    g.append('path')
        .datum(lineData)
        .attr('class', 'line')
        .attr('stroke', 'blue')
        .attr('stroke-width', 3)
        .attr('d', line)
        // .attr('x1', d => x(d.x))
        // .attr('y1', d => y(d.y))
        // .attr('x2', d => x(d.x))
        // .attr('y2', d => y(d.y))

    return (
      node.toReact()
      )
  }
}

export default TestPath;
