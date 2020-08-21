import React from 'react';

class Output extends React.Component {

  render() {
    return (
      <textarea  value ={this.props.output} className = "output" readOnly />

    );
  }
}

export default Output;
