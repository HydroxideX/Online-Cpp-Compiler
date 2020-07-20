import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/solarized_dark";
class MainArea extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid red",
          marginLeft:"100px",
          marginRight:"100px"
        }}
      >
        <AceEditor width="100%" fontSize="14pt" mode="c_cpp" theme="solarized_dark" showPrintMargin={false} zzz />
      </div>
    );
  }
}
export default MainArea;
