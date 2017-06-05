import { createSelector } from 'reselect'

const getMeasurements = (state) => state.measurements

export const getPoints = createSelector([ getMeasurements ], (measurements) => {

  // const measurements = store.measurements
  // const bust = 92
  // const hips = 98
  // const waist = 70
  // const lengthToWaist = 40
  // const backWidth = 36
  // const chestWidth = 38
  // const shoulder = 12.5
  // const topArm = 30
  // const neckWidth = 7
  // // rt const underArmPoint = 5.5
  // const xBackAddition = 5.5
  // const shoulderDartWidth = 7.5
  const { bust, hips, waist, lengthToWaist, backWidth, chestWidth, shoulder, topArm, neckWidth, xBackAddition, shoulderDartWidth} = measurements

  function calcM(pointA, pointB) {
    return (pointB.y - pointA.y) / (pointB.x - pointA.x)
  }

  function calcB(point, m) {
    return point.y - m * point.x
  }

  function lineIntersection(pointsA, pointsB) {
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

  function lengthEq(pointA, pointB) {
    return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2))
  }

  function midpoint(pointA, pointB) {
    return {x: (pointA.x + pointB.x) / 2, y: (pointA.y + pointB.y) / 2}
  }

  function perpendicular(pointA, pointB, length) {
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

  const topLine = 0;

  const leftLine = 2;

  const rightLine = 60;

  const o = {
              x: leftLine,
              y: 3
            }

  const neckLineB = {
    x: 11,
    y: o.y
  }

  const waistLine = o.y + lengthToWaist
  const waistLineA = {
    x: leftLine,
    y: o.y + lengthToWaist
  }

    const waistLineB = {
      x: rightLine,
      y: waistLineA.y
    }

  const hipLine = waistLineA.y + 22
  const hipLineA = {
    x: leftLine,
    y: waistLineA.y + 22
  }

    const hipLineB = {
      x: rightLine,
      y: hipLineA.y
    }

  const bustLine = o.y + 21.5
  const bustLineA = {
    x: leftLine,
    y: o.y + 21.5
  }

    const bustLineB = {
      x: rightLine,
      y: bustLineA.y
    }

  const backLine = o.y + 11
  const backLineA = {
    x: leftLine,
    y: o.y + 11
  }

    const backLineB = {
      x: leftLine + (rightLine - leftLine) * 0.4,
      y: backLineA.y
    }

  const shoulderLineA = {
    x: leftLine,
    y: o.y + 3
  }

    const shoulderLineB = {
      x: leftLine + (rightLine - leftLine) * 0.4,
      y: shoulderLineA.y
    }

  const neckPoint = {
    x: leftLine + neckWidth,
    y: o.y - 2
  }

  const vertArmConstructionLine = leftLine + 0.5 * backWidth

  const armConstructionLineA = {
    x: leftLine + 0.5 * backWidth,
    y: shoulderLineA.y - 0.5
  }

    const armConstructionLineB = {
      x: leftLine + 0.5 * backWidth,
      y: bustLineA.y + 0.5
    }
  
  const underArmPoint = {
    x: leftLine + 0.5 * backWidth + xBackAddition,
    y: bustLineA.y
  }

  const shoulderPoint = {
    x: leftLine + 0.5 * backWidth + 2,
    y: shoulderLineA.y
  }

  const shoulderSeamA = neckPoint

  const shoulderSeamB = shoulderPoint

  const hipPoint = {
    x: leftLine + 0.25 * hips,
    y: hipLine
  }

  const frontO = {
    x: rightLine,
    y: topLine
  }

  const frontShoulderLine = frontO.y + 4.5
  const frontNeckLineBase = frontO.y + 7.5
  const chestLine = bustLine - 4

  const frontShoulderLineA = {
    x: rightLine,
    y: frontShoulderLine
  }

  const frontShoulderLineB = {
    x: rightLine - (rightLine - leftLine) * 0.4,
    y: frontShoulderLine
  }

  const chestLineA = {
    x: rightLine,
    y: chestLine
  }

  const chestLineB = {
    x: rightLine - (rightLine - leftLine) * 0.4,
    y: chestLine
  }

  const frontNeckLineBaseA = {
    x: rightLine,
    y: frontNeckLineBase
  }

  const frontNeckLineBaseB = {
    x: rightLine - 11,
    y: frontNeckLineBase
  }

  const frontNeckPoint = {
    x: frontO.x - neckWidth,
    y: frontO.y
  }

  const shoulderReference = {
    x: frontO.x - 16.5,
    y: frontShoulderLine
  }

  const shoulderTheta = Math.atan((shoulderReference.y - frontNeckPoint.y)/(shoulderReference.x - frontNeckPoint.x))

  const frontShoulderSeamA = frontNeckPoint

  // const frontShoulderSeamB = {
  //   x: frontNeckPoint.x - 20 * Math.cos(shoulderTheta),
  //   y: frontO.y - 20 * Math.sin(shoulderTheta)
  // }


  const frontVertReference = rightLine - 0.25 * chestWidth

  const frontVertReferenceA = {
    x: frontVertReference,
    y: bustLine + 2
  }

  const frontVertReferenceB = {
    x: frontVertReference,
    y: frontNeckPoint.y + (frontVertReference - frontNeckPoint.x) * Math.tan(shoulderTheta)
  }

  const innerShoulderDartLineA = {
    x: frontVertReferenceB.x - 2 * Math.cos(shoulderTheta),
    y: frontVertReferenceB.y - 2 * Math.sin(shoulderTheta)
  }

  const innerShoulderDartLineB = frontVertReferenceA

  const outerShoulderDartLineA = {
    x: innerShoulderDartLineA.x - shoulderDartWidth * Math.cos(shoulderTheta),
    y: innerShoulderDartLineA.y - shoulderDartWidth * Math.sin(shoulderTheta)
  }

  const outerShoulderDartLineB = innerShoulderDartLineB

  const frontShoulderPoint = {
    x: frontNeckPoint.x - (shoulderDartWidth + shoulder) * Math.cos(shoulderTheta),
    y: frontNeckPoint.y - (shoulderDartWidth + shoulder) * Math.sin(shoulderTheta)
  }

  const frontShoulderSeamB = frontShoulderPoint

  const rotationPoint = innerShoulderDartLineB
  const prevTheta = Math.atan((rotationPoint.x - outerShoulderDartLineA.x)/(rotationPoint.y - outerShoulderDartLineA.y))
  const newTheta = Math.atan((rotationPoint.x - innerShoulderDartLineA.x)/(rotationPoint.y - innerShoulderDartLineA.y))
  const rotationTheta = prevTheta - newTheta

  function rotatedPoint(rotP, initP, rotationTheta) {
    const fullTheta = Math.atan((rotP.x - initP.x)/(rotP.y - initP.y))
    const d = (rotP.x - initP.x) / Math.sin(fullTheta)
    const dTheta = fullTheta - rotationTheta
    const dX = Math.sin(dTheta) * d
    const dY = Math.cos(dTheta) * d
    const finalPoint = {x: rotP.x - dX, y: rotP.y - dY}
    return finalPoint
  }


  const frontShoulderPointR = rotatedPoint(rotationPoint, frontShoulderPoint, rotationTheta)
  const outerShoulderDartLineR = rotatedPoint(rotationPoint, outerShoulderDartLineA, rotationTheta)

  const frontShoulderSeamR = [frontNeckPoint, frontShoulderPointR]

  const newInnerShoulderDartLineA = lineIntersection([innerShoulderDartLineA, innerShoulderDartLineB], frontShoulderSeamR)

  const newOuterShoulderDartLineA = rotatedPoint(rotationPoint, newInnerShoulderDartLineA, -rotationTheta)

  const dartMidline = [innerShoulderDartLineB, rotatedPoint(rotationPoint, outerShoulderDartLineA, (rotationTheta * 0.5))]

  const extendedDartMidlineA = lineIntersection(dartMidline, [newOuterShoulderDartLineA, frontShoulderPoint])
  const extendedDartMidline = [extendedDartMidlineA, outerShoulderDartLineB]

  const testPointA = lineIntersection([chestLineA, chestLineB], [outerShoulderDartLineB, newOuterShoulderDartLineA])
  const testPointB = rotatedPoint(rotationPoint, testPointA, rotationTheta)
  const dartWidthAtChestLine = () => {
    const pointA = lineIntersection([chestLineA, chestLineB], [outerShoulderDartLineB, newOuterShoulderDartLineA])
    const pointB = rotatedPoint(rotationPoint, pointA, rotationTheta)
    return lengthEq(pointA, pointB)
  }

  const chestPoint = {
    x: rightLine - 0.5 * chestWidth - dartWidthAtChestLine(),
    y: chestLine
  }

  const chestPointB = {
    x: rightLine - 0.5 * chestWidth,
    y: chestLine
  }

  const patternBustWidth = 0.5 * bust + 5

  const frontUnderarmPoint = {
    x: rightLine - (patternBustWidth - (0.5 * backWidth + xBackAddition)),
    y: bustLine
  }

  const frontArmRefA = midpoint(chestPoint, frontShoulderPoint)
  const frontArmRefB = perpendicular(chestPoint, frontShoulderPoint, 1)
  const frontArmRefC = {
    x: chestPoint.x - 1.5 * Math.sin((45 * Math.PI)/180),
    y: bustLine - 1.5 * Math.sin((45 * Math.PI)/180)
  }

  const frontHipPoint = {
    x: rightLine - (0.25 * hips + 3.5),
    y: hipLine
  }

  const backStraightUnderarmSeam = [hipPoint, underArmPoint]
  const frontStraightUnderarmSeam = [frontHipPoint, frontUnderarmPoint]

  const backOuterWaistPoint = {
    x: lineIntersection(backStraightUnderarmSeam, [waistLineA, waistLineB]).x - 2,
    y: waistLine
  }  

  const frontOuterWaistPoint = () => {
    return {x: lineIntersection([waistLineA, waistLineB], frontStraightUnderarmSeam).x + 1.5,
        y: waistLine}
  }

  const backLowerWaistLineA = {
    x: leftLine,
    y: waistLine
  }

  return {
    o,
    frontO,
    hipLineA,
    hipLineB,
    waistLineA,
    waistLineB,
    bustLine, bustLineA, bustLineB,
    backLine, backLineA, backLineB,
    shoulderLineA, shoulderLineB,
    neckPoint,
    armConstructionLineA, armConstructionLineB,
    shoulderSeamA, shoulderSeamB,
    shoulderPoint,
    vertArmConstructionLine,
    underArmPoint,
    hipPoint,
    frontShoulderLineA, frontShoulderLineB,
    chestLineA, chestLineB,
    frontNeckLineBase, frontNeckLineBaseA, frontNeckLineBaseB,
    frontNeckPoint,
    frontShoulderSeamB,
    frontVertReferenceA, frontVertReferenceB,
    newInnerShoulderDartLineA, innerShoulderDartLineB,
    newOuterShoulderDartLineA, outerShoulderDartLineB,
    extendedDartMidlineA,
    frontShoulderPoint,
    extendedDartMidline,
    chestPoint,
    frontArmRefA, frontArmRefB, frontArmRefC,
    frontUnderarmPoint,
    frontStraightUnderarmSeam,
    backOuterWaistPoint,
    frontOuterWaistPoint,
    frontHipPoint
  }
})
