import React from 'react';


class Stop extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick= this.props.onStop.bind(this);
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
