import React from 'react';

class Compile extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    alert('WHY DID YOU CLICK ME WHYYYYYYYYY');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Compile
      </button>
    );
  }
}

export default Compile;
