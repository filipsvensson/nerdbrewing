import React from 'react';
import logo from './nerdbrewing-logo.svg';
import RotatingLogo from '../RotatingLogo';

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
        Nerdbrewing was founded as a commercial gypsy-brewery in 2015 by Hannes Gruber and Karin
        Carlsson. Hannes had for many years before that been a successful home brewer and won quite
        a few medals at different competitions, for instance the Swedish homebrewing championships.
        Since then Karin has left the company and Hannes has continued in close cooperation with
        Lilla Ölfabriken and Chad Beer and the three share a brewery on Norbergsgatan in Malmö with
        the goal of increasing production and reaching a wider audience.
      </p>

      <p>
        The name of the brewery itself and the names of the beers all stem from Hannes background in
        computer science and software development. Since sharing is caring, Nerdbrewing brought open
        source from the software world into the world of brewing and the recipes are free for any
        homebrewer to try out!
      </p>
    </div>
  </section>
);

export default About;
