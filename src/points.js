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

  export const hipLineA = {
    x: leftLine,
    y: waistLineA.y + 22
  }

    export const hipLineB = {
      x: rightLine,
      y: hipLineA.y
    }

  export const bustLineA = {
    x: leftLine,
    y: o.y + 21.5
  }

    export const bustLineB = {
      x: rightLine,
      y: bustLineA.y
    }

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



// }