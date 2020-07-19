import React from 'react';
import Compile from './Compile.js'
import Run from './Run.js'
import Save from './Save.js'
import Stop from './Stop.js'

class ButtonsBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div class = "Buttons">
      <Compile />
      <Run />
      <Save />
      <Stop />
      </div>
    )
  }
}

export default ButtonsBar;
