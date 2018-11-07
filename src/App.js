import 'normalize.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Main from "./Main/Main";
import Contact from "./Contact/Contact"
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
        <Router>
          <div className="App">
            <Route path="/" exact component={Main} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      );
    }
  }
}

export default App;
