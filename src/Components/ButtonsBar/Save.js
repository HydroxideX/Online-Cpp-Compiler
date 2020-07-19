import React from 'react';


class Save extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    alert('Nom NUM nom num nom');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Save
      </button>
    );
  }
}

export default Save;
