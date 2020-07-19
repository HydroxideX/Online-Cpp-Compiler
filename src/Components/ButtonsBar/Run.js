import React from 'react';

class Run extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    alert('Sh3rawy is EVIL');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Run
      </button>
    );
  }
}

export default Run;
