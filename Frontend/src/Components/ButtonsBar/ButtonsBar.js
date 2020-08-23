import React from 'react';
import Run from './Run.js'
import Save from './Save.js'

class ButtonsBar extends React.Component {

  render() {
    return (
      <div class = "Buttons">
      <Run onRun = {this.props.buttonFunctions['onRun']} />
      <Save onSave = {this.props.buttonFunctions['onSave']} />
      </div>
    )
  }
}

export default ButtonsBar;
