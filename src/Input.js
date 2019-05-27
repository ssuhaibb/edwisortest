import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  //handling first input box
  inputfHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  //handling second input box
  inputsHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.inputfHandler} />
        <input type="text" value={this.state.name} onChange={this.inputsHandler} />
      </div>
    );
  }
}

export default Input;
