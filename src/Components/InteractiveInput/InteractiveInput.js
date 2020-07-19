import React from 'react';
import Output from './Output.js'
import Input from './Input.js'


class InteractiveInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {sidebarOpen: false};
  }

  handleViewSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  render() {
    var sidebarClass = this.state.sidebarOpen ? 'sidebar-open' : 'sidebar';
    return (
      <div className={sidebarClass}>
        <button onClick={this.handleViewSidebar} className = "sidebar-toggle">Input and Output</button>
        <Input />
        <Output />
      </div>
    )
  }
}

export default InteractiveInput;
