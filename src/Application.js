import React from 'react';
import './index.css';
import ButtonsBar from './Components/ButtonsBar/ButtonsBar.js'
import InteractiveInput from './Components/InteractiveInput/InteractiveInput.js'
import MainArea from './Components/MainArea/MainArea.js'


class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      code:"",
      output:"",
      clearInput : false,
      clearOutput : false
    }
  }

  

  handler = (val) => {
    this.setState({
      code: val
    })
  }

  onCompile = () => {
    this.setState({output: 'Compiling ...\n'})
  }

  onRun = () => {
    this.setState({output: 'Running ...\n'})
  }

  onSave = () => {
    const element = document.createElement("a");
    const file = new Blob([this.state.code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.cpp";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  onStop = () => {
    this.setState({output: this.state.output + 'Process Stopped\n'})
  }


  onEnter = (inputString) => {
      this.setState({output: this.state.output + inputString +'\n'})
      this.setState({ clearInput: true });
  }



  stopClearing = (input) => {
    if(input === 0) {
      this.setState({clearInput: false})

    }
  }


  buttonFunctions = {
        'onCompile': this.onCompile,
        'onRun': this.onRun,
        'onSave': this.onSave,
        'onStop': this.onStop,
  };

  render() {
    return (
      <div className = 'application'>
        <ButtonsBar buttonFunctions = {this.buttonFunctions}/>
        <MainArea handler = {this.handler}></MainArea>
        <InteractiveInput stopClearing = {this.stopClearing} clearInput = {this.state.clearInput} onEnter = {this.onEnter} output = {this.state.output}/>
      </div>
    );
  }
}



export default Application
