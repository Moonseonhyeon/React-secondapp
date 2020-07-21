import React, { Component } from "react";

class App extends Component {
  changeFocus = () => {
    this.input.focus();
    this.mydiv.style.backgroundColor = "yellow";
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="text"
          placeholder="Username"
        />
        <input type="text" placeholder="Password" />
        <div
          ref={(ref) => {
            this.mydiv = ref;
          }}
        >
          ddd
        </div>
        <button onClick={this.changeFocus}>포커스 이동</button>
      </div>
    );
  }
}

export default App;
