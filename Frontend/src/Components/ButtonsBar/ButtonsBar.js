import React from 'react';
import Run from './Run.js'
import Save from './Save.js'
import Stop from './Stop.js'

class ButtonsBar extends React.Component {

  render() {
    return (
      <div class = "Buttons">
      <Run onRun = {this.props.buttonFunctions['onRun']} />
      <Save onSave = {this.props.buttonFunctions['onSave']} />
      <Stop onStop = {this.props.buttonFunctions['onStop']} />
      </div>
    )
  }
}

export default ButtonsBar;
