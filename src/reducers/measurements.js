const defaults = {
  bust: 92,
  hips: 98,
  waist: 70,
  lengthToWaist: 40,
  backWidth: 36,
  chestWidth: 38,
  shoulder: 12.5,
  topArm: 30,
  pointOCB: 3,
  armholeDepth: 21.5,
  neckWidth: 7,
  xBackAddition: 5.5,
  shoulderDartWidth: 7.5
}

const measurements = (state = defaults, action) => {
  switch (action.type) {
    case 'CHANGE_MEASUREMENT':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default measurements
