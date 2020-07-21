import React from 'react';

class Output extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <textarea  value ={this.props.output} class = "output" readOnly />
    );
  }
}

export default Output;
