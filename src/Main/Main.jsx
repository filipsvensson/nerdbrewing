import React, { Fragment } from 'react';
import Header from './Header';
import InstagramFeed from './InstagramFeed';
import About from './About';

const Main = () => (
  <Fragment>
    <Header />
    <InstagramFeed />
    <About />
  </Fragment>
);

export default Main;
