import * as d3 from 'd3';


const d3chart = {
  createLine: (svgEl, scale, coords) => {
    const g = d3.select(svgEl)
      .append('g')
      .attr('class', 'mah-line')

    const line = d3.line()
      .x(d => scale.x(d.x))
      .y(d => scale.y(d.y))

    g.append('path')
        .datum(coords)
        .attr('class', 'line')
        .attr('stroke', 'black')
        .attr('stroke-width', 1.5)
        .attr('d', line)
  },
  drawLines: (svgEl, scale, coords) => {
    coords.forEach(coord => {
      const g = d3.select(svgEl)
        .append('g')
        .attr('class', 'd3-line')
      createLine(g, scale, coord)
    })
  }
}

export function createLine(el, scale, coords) {
  // const elem = d3.select(el)

  const line = d3.line()
    .x(d => scale.x(d.x))
    .y(d => scale.y(d.y))

  el.append('path')
      .datum(coords)
      .attr('class', d => console.log(d))
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('d', line)
}

export default d3chart