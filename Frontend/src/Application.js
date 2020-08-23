import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonsBar from './Components/ButtonsBar/ButtonsBar.js'
import InteractiveInput from './Components/InteractiveInput/InteractiveInput.js'
import MainArea from './Components/MainArea/MainArea.js'


class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      code:"/******************************************************************************\n\nWelcome.\nThis is an online compiler for C, C++.\nCode, Compile, Run online from anywhere in world.\n\n*******************************************************************************/\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout<<\"Hello World!\\n\";\n\n    return 0;\n}\n",
      input:"",
      output:"",
      clearInput : false,
      clearOutput : false,
      stopped: false,
    }
  }


  handler = (val) => {
    this.setState({
      code: val
    })
  }


  onRun = () => {
    this.sendInputAndCode().then(this.getOutput())
  }

  sendInputAndCode = () => {
        return Promise.all([this.sendCode(), this.sendInput()])
  }

  sendCode = () => {
    this.setState({output: 'Running ...\n', stopped:false})
    fetch('http://127.0.0.1:8000/api/code/', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify({"content":this.state.code})
    });
  }
  sendInput = () => {
    fetch('http://127.0.0.1:8000/api/input/', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify({"content":this.state.input})
    });
  }

  getOutput = () => {
    fetch('http://127.0.0.1:8000/api/output/')
    .then(response => response.json())
    .then(data=>
      this.setState({
        output: data
      })
    );
  }

  onEnter = (inputString) => {
      this.setState({input: inputString});
  }

  onSave = () => {
    const element = document.createElement("a");
    const file = new Blob([this.state.code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "main.cpp";
    document.body.appendChild(element);
    element.click();
  }



  buttonFunctions = {
        'onRun': this.onRun,
        'onSave': this.onSave,
  };

  render() {
    return (
      <div className = 'application'>
        <ButtonsBar buttonFunctions = {this.buttonFunctions}/>
        <MainArea handler = {this.handler}></MainArea>
        <InteractiveInput  onEnter = {this.onEnter} input = {this.state.input} output = {this.state.output}/>
      </div>
    );
  }
}


export default Application
