import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index.js'

const defaults = {
  measurements: {
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

}}
export const store = createStore(reducer, defaults,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
