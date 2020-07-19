import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application.js'

class SideBar extends React.Component {
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
        <div>I slide into view</div>
                <div>Me too!</div>
        <div>Meee Threeeee!</div>
        <button onClick={this.handleViewSidebar}>Toggle Sidebar</button>
      </div>
    );
  }
}



ReactDOM.render(
  <SideBar />,
  document.getElementById('root')
);
