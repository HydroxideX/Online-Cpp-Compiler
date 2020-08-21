import React from 'react';
<<<<<<< HEAD:Frontend/src/Components/ButtonsBar/ButtonsBar.js
=======
import Compile from './Compile.js'
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/ButtonsBar/ButtonsBar.js
import Run from './Run.js'
import Save from './Save.js'
import Stop from './Stop.js'

class ButtonsBar extends React.Component {
<<<<<<< HEAD:Frontend/src/Components/ButtonsBar/ButtonsBar.js
  render() {
    return (
      <div class = "Buttons">
=======


  render() {
    return (
      <div class = "Buttons">
      <Compile onCompile = {this.props.buttonFunctions['onCompile']} />
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/ButtonsBar/ButtonsBar.js
      <Run onRun = {this.props.buttonFunctions['onRun']} />
      <Save onSave = {this.props.buttonFunctions['onSave']} />
      <Stop onStop = {this.props.buttonFunctions['onStop']} />
      </div>
    )
  }
}

export default ButtonsBar;
