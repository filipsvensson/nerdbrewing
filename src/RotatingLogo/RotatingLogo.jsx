import React from 'react';
import InnerLogo from './InnerLogo';
import OuterLogo from './OuterLogo';

import './RotatingLogo.css';

const RotatingLogo = () => (
  <div className="rotating-logo">
    <InnerLogo />
    <OuterLogo />
  </div>
);

export default RotatingLogo;
