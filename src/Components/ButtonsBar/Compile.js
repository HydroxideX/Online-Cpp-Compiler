import React from 'react';

class Compile extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.props.onCompile.bind(this);
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
