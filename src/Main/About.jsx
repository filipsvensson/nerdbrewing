import React from 'react';
import logo from './nerdbrewing-logo.svg';
import RotatingLogo from '../RotatingLogo/RotatingLogo';

import './About.css';

const About = () => (
  <section id="about" className="about">
    <div className="left-column">
      <RotatingLogo />
    </div>
    <div className="right-column">
      <div className="icon-heading">
        <img className="about-small-logo" src={logo} alt="" />
        <h3 className="heading">About</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue justo, pellentesque sit
        amet enim at, egestas vehicula ex. metus, quis elementum erat. Mauris tincidunt ut elit at
        fringilla. Ut consectetur justo ac sagittis lobortis. Fusce semper dolor justo, nec
        fermentum lacus posuere quis.
      </p>

      <p>
        luctus eros malesuada pulvinar. Vestibulum dignissim, nisi ac viverra vehicula, nunc lorem
        laoreet nibh, eget scelerisque eros urna nec quam. Morbi quis efficitur metus, quis
        elementum erat. Mauris tincidunt ut elit at fringilla. Ut consectetur justo ac sagit.
      </p>
    </div>
  </section>
);

export default About;
