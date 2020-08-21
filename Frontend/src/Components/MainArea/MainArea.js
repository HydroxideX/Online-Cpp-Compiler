import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/solarized_dark";
<<<<<<< HEAD:Frontend/src/Components/MainArea/MainArea.js
=======
import 'brace/snippets/c_cpp';
import 'brace/ext/language_tools';
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/MainArea/MainArea.js

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.aceEditor = React.createRef();
    this.state = {
      defaultValue:
<<<<<<< HEAD:Frontend/src/Components/MainArea/MainArea.js
        "/******************************************************************************\n\nWelcome.\nThis is an online compiler for C, C++.\nCode, Compile, Run online from anywhere in world.\n\n*******************************************************************************/\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout<<\"Hello World!\\n\";\n\n    return 0;\n}\n"
=======
        '/******************************************************************************\n\nWelcome.\nThis is an online compiler for C, C++.\nCode, Compile, Run online from anywhere in world.\n\n*******************************************************************************/\n\nint main()\n{\n    printf("Hello World!");\n\n    return 0;\n}\n',
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/MainArea/MainArea.js
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
<<<<<<< HEAD:Frontend/src/Components/MainArea/MainArea.js
          marginLeft: "3%",
          marginRight: "3%",
          marginTop: "0.5%",
          height: "92%",
=======
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "0.5%",
          height: "90%",
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/MainArea/MainArea.js
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
<<<<<<< HEAD:Frontend/src/Components/MainArea/MainArea.js
=======
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2
          }}
>>>>>>> 8544fbe014e992ecb4fdbeacd89e6982845f209e:src/Components/MainArea/MainArea.js
          zzz
        />
      </div>
    );
  }
}
export default MainArea;
