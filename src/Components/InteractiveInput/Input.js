import React from 'react';

class Input extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick= this.props.onEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
  }


  handleChange(event) {
   this.setState({value: event.target.value});
 }

  render() {
    if(this.props.clearInput) {
      this.setState({value: ''});
      this.props.stopClearing(0);
    }
    return (
      <div >
        <input className = "input" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => this.handleClick(this.state.value)} className = "run-button">
          Enter
        </button>
      </div>
    );
  }
}

export default Input;
