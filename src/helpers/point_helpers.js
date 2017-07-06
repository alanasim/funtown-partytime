export function calcM(pointA, pointB) {
  return (pointB.y - pointA.y) / (pointB.x - pointA.x)
}

export function calcB(point, m) {
  return point.y - m * point.x
}

export function lineIntersection(pointsA, pointsB) {
  // y = mx + b
  // m = point2y
  const [point1, point2] = pointsA
  const mA = (point2.y - point1.y) / (point2.x - point1.x)
  const bA = point1.y - mA * point1.x
  const [point3, point4] = pointsB
  const mB = (point4.y - point3.y) / (point4.x - point3.x)
  const bB = point3.y - mB * point3.x

  const x = (bB - bA) / (mA - mB)
  const y = mA * x + bA
  return {x: x, y: y}
}

export function lengthEq(pointA, pointB) {
  return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2))
}

export function midpoint(pointA, pointB) {
  return {x: (pointA.x + pointB.x) / 2, y: (pointA.y + pointB.y) / 2}
}

export function perpendicular(pointA, pointB, length) {
  const mA = calcM(pointA, pointB)
  const mP = (-1 / mA)
  const midpnt = midpoint(pointA, pointB)
  const bP = calcB(midpnt, mP)
  const point2 = {}
  point2.x = (midpnt.x + 3)
  point2.y = mP * point2.x + bP
  const theta = Math.atan((point2.y - midpnt.y) / (point2.x - midpnt.x))
  const finalX = (Math.sin(theta)*length - bP + midpnt.y) / mP
  const finalY = mP * finalX + bP
  return {x: finalX, y: finalY}
}