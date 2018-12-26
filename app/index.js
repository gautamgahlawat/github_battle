var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
// state
// lifecycle
//  UI

class App extends React.Component {
  render() {
    return <div>Hello to the github battle!!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
