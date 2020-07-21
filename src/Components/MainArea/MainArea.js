import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/solarized_dark";
class MainArea extends Component {
  constructor(props) {
    super(props);
    this.aceEditor = React.createRef();
    this.state = {
      defaultValue:
        '/******************************************************************************\n\nWelcome.\nThis is an online compiler for C, C++.\nCode, Compile, Run online from anywhere in world.\n\n*******************************************************************************/\n\nint main()\n{\n    printf("Hello World!");\n\n    return 0;\n}\n',
    };
  }
  updateData = (newValue) => {
    this.props.handler(newValue);
  };
  render() {
    return (
      <div
        style={{
          border: "2px solid red",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "0.5%",
          height: "90%",
        }}
      >
        <AceEditor
          ref="aceEditor"
          width="100%"
          height="100%"
          defaultValue={this.state.defaultValue}
          fontSize="14pt"
          mode="c_cpp"
          theme="solarized_dark"
          showPrintMargin={false}
          onChange={this.updateData}
          zzz
        />
      </div>
    );
  }
}
export default MainArea;
