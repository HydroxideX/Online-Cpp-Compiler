import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonsBar from './Components/ButtonsBar/ButtonsBar.js'
import InteractiveInput from './Components/InteractiveInput/InteractiveInput.js'


class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <ButtonsBar />
      //AddMainAreaWhenComplete
      <InteractiveInput />
      </div>
    );
  }
}

export default Application
