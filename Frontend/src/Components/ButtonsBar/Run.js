import React from 'react';

class Run extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.props.onRun.bind(this);
  }


  render() {
    return (
      <button style = {{fontSize: "80%" }} onClick={this.handleClick}>
        Run
      </button>
    );
  }
}

export default Run;
