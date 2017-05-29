// class Points {

  export const bust = 92
  export const hips = 98
  export const waist = 70
  export const lengthToWaist = 40
  export const backWidth = 36
  export const chestWidth = 38
  export const shoulder = 12.5
  export const topArm = 30
  export const neckWidth = 7
  // export const underArmPoint = 5.5
  export const xBackAddition = 5.5
  export const shoulderDartWidth = 7.5

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

  export const topLine = 0;

  export const leftLine = 2;

  export const rightLine = 60;

  export const o = {
              x: leftLine,
              y: 3
            }

  export const neckLineB = {
    x: 11,
    y: o.y
  }

  export const waistLine = o.y + lengthToWaist
  export const waistLineA = {
    x: leftLine,
    y: o.y + lengthToWaist
  }

    export const waistLineB = {
      x: rightLine,
      y: waistLineA.y
    }

  export const hipLine = waistLineA.y + 22
  export const hipLineA = {
    x: leftLine,
    y: waistLineA.y + 22
  }

    export const hipLineB = {
      x: rightLine,
      y: hipLineA.y
    }

  export const bustLine = o.y + 21.5
  export const bustLineA = {
    x: leftLine,
    y: o.y + 21.5
  }

    export const bustLineB = {
      x: rightLine,
      y: bustLineA.y
    }

  export const backLine = o.y + 11
  export const backLineA = {
    x: leftLine,
    y: o.y + 11
  }

    export const backLineB = {
      x: leftLine + (rightLine - leftLine) * 0.4,
      y: backLineA.y
    }

  export const shoulderLineA = {
    x: leftLine,
    y: o.y + 3
  }

    export const shoulderLineB = {
      x: leftLine + (rightLine - leftLine) * 0.4,
      y: shoulderLineA.y
    }

  export const neckPoint = {
    x: leftLine + neckWidth,
    y: o.y - 2
  }

  export const vertArmConstructionLine = leftLine + 0.5 * backWidth

  export const armConstructionLineA = {
    x: leftLine + 0.5 * backWidth,
    y: shoulderLineA.y - 0.5
  }

    export const armConstructionLineB = {
      x: leftLine + 0.5 * backWidth,
      y: bustLineA.y + 0.5
    }
  
  export const underArmPoint = {
    x: leftLine + 0.5 * backWidth + xBackAddition,
    y: bustLineA.y
  }

  export const shoulderPoint = {
    x: leftLine + 0.5 * backWidth + 2,
    y: shoulderLineA.y
  }

  export const shoulderSeamA = neckPoint

  export const shoulderSeamB = shoulderPoint

  export const hipPoint = {
    x: leftLine + 0.25 * hips,
    y: hipLine
  }

  export const frontO = {
    x: rightLine,
    y: topLine
  }

  export const frontShoulderLine = frontO.y + 4.5
  export const frontNeckLineBase = frontO.y + 7.5
  export const chestLine = bustLine - 4

  export const frontShoulderLineA = {
    x: rightLine,
    y: frontShoulderLine
  }

  export const frontShoulderLineB = {
    x: rightLine - (rightLine - leftLine) * 0.4,
    y: frontShoulderLine
  }

  export const chestLineA = {
    x: rightLine,
    y: chestLine
  }

  export const chestLineB = {
    x: rightLine - (rightLine - leftLine) * 0.4,
    y: chestLine
  }

  export const frontNeckLineBaseA = {
    x: rightLine,
    y: frontNeckLineBase
  }

  export const frontNeckLineBaseB = {
    x: rightLine - 11,
    y: frontNeckLineBase
  }

  export const frontNeckPoint = {
    x: frontO.x - neckWidth,
    y: frontO.y
  }

  export const shoulderReference = {
    x: frontO.x - 16.5,
    y: frontShoulderLine
  }

  const shoulderTheta = Math.atan((shoulderReference.y - frontNeckPoint.y)/(shoulderReference.x - frontNeckPoint.x))

  export const frontShoulderSeamA = frontNeckPoint

  // export const frontShoulderSeamB = {
  //   x: frontNeckPoint.x - 20 * Math.cos(shoulderTheta),
  //   y: frontO.y - 20 * Math.sin(shoulderTheta)
  // }


  export const frontVertReference = rightLine - 0.25 * chestWidth

  export const frontVertReferenceA = {
    x: frontVertReference,
    y: bustLine + 2
  }

  export const frontVertReferenceB = {
    x: frontVertReference,
    y: frontNeckPoint.y + (frontVertReference - frontNeckPoint.x) * Math.tan(shoulderTheta)
  }

  export const innerShoulderDartLineA = {
    x: frontVertReferenceB.x - 2 * Math.cos(shoulderTheta),
    y: frontVertReferenceB.y - 2 * Math.sin(shoulderTheta)
  }

  export const innerShoulderDartLineB = frontVertReferenceA

  export const outerShoulderDartLineA = {
    x: innerShoulderDartLineA.x - shoulderDartWidth * Math.cos(shoulderTheta),
    y: innerShoulderDartLineA.y - shoulderDartWidth * Math.sin(shoulderTheta)
  }

  export const outerShoulderDartLineB = innerShoulderDartLineB

  export const frontShoulderPoint = {
    x: frontNeckPoint.x - (shoulderDartWidth + shoulder) * Math.cos(shoulderTheta),
    y: frontNeckPoint.y - (shoulderDartWidth + shoulder) * Math.sin(shoulderTheta)
  }

  export const frontShoulderSeamB = frontShoulderPoint

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


  export const frontShoulderPointR = rotatedPoint(rotationPoint, frontShoulderPoint, rotationTheta)
  export const outerShoulderDartLineR = rotatedPoint(rotationPoint, outerShoulderDartLineA, rotationTheta)

  export const frontShoulderSeamR = [frontNeckPoint, frontShoulderPointR]

  export const newInnerShoulderDartLineA = lineIntersection([innerShoulderDartLineA, innerShoulderDartLineB], frontShoulderSeamR)

  export const newOuterShoulderDartLineA = rotatedPoint(rotationPoint, newInnerShoulderDartLineA, -rotationTheta)

  export const dartMidline = [innerShoulderDartLineB, rotatedPoint(rotationPoint, outerShoulderDartLineA, (rotationTheta * 0.5))]

  export const extendedDartMidlineA = lineIntersection(dartMidline, [newOuterShoulderDartLineA, frontShoulderPoint])
  export const extendedDartMidline = [extendedDartMidlineA, outerShoulderDartLineB]

  export const testPointA = lineIntersection([chestLineA, chestLineB], [outerShoulderDartLineB, newOuterShoulderDartLineA])
  export const testPointB = rotatedPoint(rotationPoint, testPointA, rotationTheta)
  const dartWidthAtChestLine = () => {
    const pointA = lineIntersection([chestLineA, chestLineB], [outerShoulderDartLineB, newOuterShoulderDartLineA])
    const pointB = rotatedPoint(rotationPoint, pointA, rotationTheta)
    return lengthEq(pointA, pointB)
  }

  export const chestPoint = {
    x: rightLine - 0.5 * chestWidth - dartWidthAtChestLine(),
    y: chestLine
  }

  export const chestPointB = {
    x: rightLine - 0.5 * chestWidth,
    y: chestLine
  }

  const patternBustWidth = 0.5 * bust + 5

  export const frontUnderarmPoint = {
    x: rightLine - (patternBustWidth - (0.5 * backWidth + xBackAddition)),
    y: bustLine
  }

  export const frontArmRefA = midpoint(chestPoint, frontShoulderPoint)
  export const frontArmRefB = perpendicular(chestPoint, frontShoulderPoint, 1)
  export const frontArmRefC = {
    x: chestPoint.x - 1.5 * Math.sin((45 * Math.PI)/180),
    y: bustLine - 1.5 * Math.sin((45 * Math.PI)/180)
  }

  export const frontHipPoint = {
    x: rightLine - (0.25 * hips + 3.5),
    y: hipLine
  }

  const backStraightUnderarmSeam = [hipPoint, underArmPoint]
  export const frontStraightUnderarmSeam = [frontHipPoint, frontUnderarmPoint]

  export const backOuterWaistPoint = {
    x: lineIntersection(backStraightUnderarmSeam, [waistLineA, waistLineB]).x - 2,
    y: waistLine
  }  

  export const frontOuterWaistPoint = () => {
    return {x: lineIntersection([waistLineA, waistLineB], frontStraightUnderarmSeam).x + 1.5,
        y: waistLine}
  }  
// }