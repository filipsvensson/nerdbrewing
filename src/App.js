import React, { Component } from "react";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList";
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
          <RecipeList />
        </div>
      );
    }
  }
}

export default App;
