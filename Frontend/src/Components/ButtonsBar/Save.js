import React from 'react';


class Save extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.props.onSave.bind(this);
  }

  render() {
    return (
      <button style = {{fontSize: "80%" }} onClick={this.handleClick}>
        Save
      </button>
    );
  }
}

export default Save;
