import React, { Component, Fragment } from 'react';
import Header from "./Header";
import InstagramFeed from "./InstagramFeed";
import About from "./About";

class Main extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <InstagramFeed />
        <About />
      </Fragment>
    );
  }

}

export default Main;
