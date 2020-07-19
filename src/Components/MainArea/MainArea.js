import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
class MainArea extends Component {
  render() {
    return (
      <div>
        <AceEditor mode="javascript" theme="monokai" zzz/>
      </div>
    );
  }
}
export default MainArea;
