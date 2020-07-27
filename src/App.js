import React, { Component } from "react";
import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";
import Nav from "./Nav";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br />
        <br />
        <Route path="/" component={Home} exact={true} />
        <hr />
        <Route path="/about/5" component={About} />
        <hr />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
