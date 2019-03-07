import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Gallery from '../Gallery';
import About from './About';

const Main = () => (
  <Fragment>
    <Header />
    <Gallery />
    <About />
  </Fragment>
);

export default Main;
