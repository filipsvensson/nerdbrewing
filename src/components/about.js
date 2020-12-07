import React from "react"
import styled from "styled-components/macro"
import Logo from "../assets/nerdbrewing-logo.svg"
import RotatingLogo from "./rotating-logo"

const AboutSection = styled.section`
  display: flex;
  margin: 2rem 0;

  @media (min-width: 40rem) {
    margin: 4rem 0;
  }

  @media (min-width: 60rem) {
    margin: 6rem 0;
  }
`

const LeftColumn = styled.div`
  display: none;

  @media (min-width: 60rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 3rem;
    padding-left: 1rem;
    flex: 0 0 auto;
  }
`

const RightColumn = styled.div`
  border-left: 2px solid #252422;
  text-align: left;
  padding-left: 3rem;

  p {
    line-height: 1.5;
    max-width: 48rem;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

const LogoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

const SmallLogo = styled(Logo)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;

  @media (min-width: 60rem) {
    display: none;
  }
`

const Heading = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 600;
  margin: 0;
`

const About = () => (
  <AboutSection>
    <LeftColumn>
      <RotatingLogo />
    </LeftColumn>
    <RightColumn>
      <LogoHeaderContainer>
        <SmallLogo />
        <Heading>About</Heading>
      </LogoHeaderContainer>
      <p>
        Nerdbrewing was founded as a commercial gypsy-brewery in 2015 by Hannes
        Gruber and Karin Carlsson. Hannes had for many years before that been a
        successful home brewer and won quite a few medals at different
        competitions, for instance the Swedish homebrewing championships. Since
        then Karin has left the company and Hannes has continued in close
        cooperation with Lilla Ölfabriken and Chad Beer and the three share a
        brewery on Norbergsgatan in Malmö with the goal of increasing production
        and reaching a wider audience.
      </p>

      <p>
        The name of the brewery itself and the names of the beers all stem from
        Hannes background in computer science and software development. Since
        sharing is caring, Nerdbrewing brought open source from the software
        world into the world of brewing and the recipes are free for any
        homebrewer to try out!
      </p>
    </RightColumn>
  </AboutSection>
)

export default About
