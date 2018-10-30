import React, { Component } from "react";
import RotatingLogo from '../RotatingLogo/RotatingLogo';

import './About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="left-column">
          <RotatingLogo />
        </div>
        <div className="right-column">
          <h3 className="left-colmun-heading">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue justo, pellentesque sit amet enim at, egestas vehicula ex.
            metus, quis elementum erat. Mauris tincidunt ut elit at fringilla. Ut consectetur justo ac sagittis lobortis. Fusce semper dolor justo, nec fermentum lacus posuere quis.
          </p>

          <p>
            luctus eros malesuada pulvinar. Vestibulum dignissim, nisi ac viverra vehicula, nunc lorem laoreet nibh, eget scelerisque eros urna nec quam. Morbi quis efficitur
            metus, quis elementum erat. Mauris tincidunt ut elit at fringilla. Ut consectetur justo ac sagit.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
