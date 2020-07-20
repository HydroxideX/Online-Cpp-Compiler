import React from 'react';

class Input extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    alert('Nom NUM nom num nom');
  }

  render() {
    return (
      <div >
        <input className = "input"/>
        <button onClick={this.handleClick} className = "run-button">
          Run
        </button>
      </div>
    );
  }
}

export default Input;
