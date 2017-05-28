import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import Test from './test.js'

class CanvasWrapper extends Component {
  render() {
    const width = 800
    const height = 800

    const x = d3.scaleLinear()
      .range([0, width])
      .domain([0, 68])
    const y = d3.scaleLinear()
      .range([0, height])
      .domain([0, 68])

    var childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {x: x, y: y}));


    // const lineData = [{x: 50, y: 50}, {x: 500, y: 500}]

    // const line = d3.line()
    //   .x(d => x(d.x))
    //   .y(d => y(d.y))

    // let node = ReactFauxDOM.createElement('svg')
    // let svg = d3.select(node)
    // .attr('width', width)
    // .attr('height', height)


    // svg.append('path')
    //     .datum(lineData)
    //     .attr('class', 'line')
    //     .attr('stroke', 'black')
    //     .attr('stroke-width', 3)
    //     .attr('d', line)
        // .attr('x1', d => x(d.x))
        // .attr('y1', d => y(d.y))
        // .attr('x2', d => x(d.x))
        // .attr('y2', d => y(d.y))

    return (
      <svg width={width} height={height} style={{border: '1px solid black'}}>
        {childrenWithProps}
      </svg>
      )
  }
}

export default CanvasWrapper;
