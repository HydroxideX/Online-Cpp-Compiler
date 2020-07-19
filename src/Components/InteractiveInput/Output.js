import React from 'react';

class Output extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <textarea  class = "output" readOnly />
    );
  }
}

export default Output;
