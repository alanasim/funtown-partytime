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

  export const frontShoulderSeamB = {
    x: frontNeckPoint.x - 20 * Math.cos(shoulderTheta),
    y: frontO.y - 20 * Math.sin(shoulderTheta)
  }

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

// }