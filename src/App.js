import React, { Component } from "react";
import Typography from 'typography'
import { TypographyStyle, GoogleFont } from 'react-typography'
// import themeOceanBeachTheme from 'typography-theme-ocean-beach'
// import themeSutroTheme from 'typography-theme-sutro'
import themeGithubTheme from 'typography-theme-github'
import "./App.css";
// import RecipeList from "./RecipeList/RecipeList";
import Header from "./Main/Header";
import InstagramFeed from "./Main/InstagramFeed";
// import About from "./Main/About";
import About2 from "./Main/About2";
import Footer2 from "./Main/Footer2";
import UnderConstruction from "./UnderConstruction";

const typography = new Typography(themeGithubTheme)

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
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Header />
          <InstagramFeed />
          <About2 />
          <Footer2 />
        </div>
      );
    }
  }
}
// <About />

export default App;
