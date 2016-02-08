"use strict";
let React = require('react');
let ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return <h1>Hello form React!</h1>;
  }
}

ReactDOM.render(<App/>, document.querySelector("#reactroot"));
