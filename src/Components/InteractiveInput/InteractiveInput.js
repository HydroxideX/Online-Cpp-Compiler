import React from 'react';
import Output from './Output.js'
import Input from './Input.js'

class InteractiveInput extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Input />
        <Output />
      </div>
    )
  }
}

export default InteractiveInput;
