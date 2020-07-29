import React, { Component } from "react";
import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";
import { Route } from "react-router-dom";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
      </div>
    );
  }
}

export default App;
