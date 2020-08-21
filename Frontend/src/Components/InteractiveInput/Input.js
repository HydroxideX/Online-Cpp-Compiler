import React from 'react';

class Input extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
  }


  handleChange(event) {
   this.setState({value: event.target.value});
   this.props.onEnter(event.target.value);
 }

  render() {
    return (
      <div >
        <textarea  className = "input" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input;
