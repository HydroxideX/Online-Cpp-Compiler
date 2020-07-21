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
      code:""
    }
  }
  handler = (val) => {
    this.setState({
      code: val
    })
  }
  render() {
    return (
      <div className = 'application'>
        <ButtonsBar />
        <MainArea handler = {this.handler}></MainArea>
        <InteractiveInput />
      </div>
    );
  }
}



export default Application
