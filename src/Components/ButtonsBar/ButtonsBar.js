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
      <Compile onCompile = {this.props.buttonFunctions['onCompile']} />
      <Run onRun = {this.props.buttonFunctions['onRun']} />
      <Save onSave = {this.props.buttonFunctions['onSave']} />
      <Stop onStop = {this.props.buttonFunctions['onStop']} />
      </div>
    )
  }
}

export default ButtonsBar;
