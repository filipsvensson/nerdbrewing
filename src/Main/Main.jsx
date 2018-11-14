import React, { Fragment } from 'react';
import Header from './Header';
import Gallery from '../InstagramFeed/Gallery';
import About from './About';

const Main = () => (
  <Fragment>
    <Header />
    <Gallery />
    <About />
  </Fragment>
);

export default Main;
