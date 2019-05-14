import React from 'react';
import styled from 'styled-components/macro';
import ContactForm from './ContactForm';
import SocialLinks from '../SocialLinks/SocialLinks';

const ContactPage = styled.address`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 1rem;
  margin-bottom: 3rem;
  justify-content: center;

  @media (min-width: 30rem) {
    flex-direction: row;
    margin-top: 3.5rem;
    margin-bottom: 6rem;
  }
`;

const Address = styled.address`
  font-family: 'Raleway', sans-serif;
  text-align: left;
  padding-top: 1.5rem;
  font-style: normal;
  margin-bottom: 3rem;

  & > * {
    margin-bottom: 0.6rem;
  }

  @media (min-width: 30rem) {
    margin-left: 1rem;
    margin-bottom: 0;
  }
  @media (min-width: 35rem) {
    margin-left: 2rem;
  }
`;

const Email = styled.div`
  margin-top: 1rem;
`;

const Links = styled(SocialLinks)`
  @media (min-width: 26.5rem) {
    display: none;
  }
`;

const Contact = () => (
  <ContactPage>
    <ContactForm />
    <Address>
      <div>Nerdbrewing C/O Lilla Ölfabriken</div>
      <div>Norbergsgatan 24</div>
      <div>214 50 Malmö</div>
      <Email>info@nerdbrewing.se</Email>
      <Links />
    </Address>
  </ContactPage>
);

export default Contact;
