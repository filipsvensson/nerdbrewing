import React, { Component } from "react";
import "./App.css";
import Header from "./Main/Header";
import InstagramFeed from "./Main/InstagramFeed";
import About from "./Main/About";
import UnderConstruction from "./UnderConstruction";


const UNDER_CUNSTRUCTON = false;

class App extends Component {
  render() {
    if (UNDER_CUNSTRUCTON) {
      return (
        <div className="App">
          <UnderConstruction />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <InstagramFeed />
          <About />
        </div>
      );
    }
  }
}

export default App;
