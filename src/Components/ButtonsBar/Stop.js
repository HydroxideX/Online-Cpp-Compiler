import React from 'react';


class Stop extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    alert('Hmmmmmmmmm');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Stop
      </button>
    );
  }
}

export default Stop;
