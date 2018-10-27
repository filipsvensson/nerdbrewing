import React, { Component } from 'react';
import InnerLogo from './InnerLogo';
import OuterLogo from './OuterLogo';

import './RotatingLogo.css'

class RotatingLogo extends Component {

  render() {
    return (
      <div className="rotating-logo">
        <InnerLogo/>
        <OuterLogo/>
      </div>
    );
  }

}

export default RotatingLogo;
