import React from "react"
import styled from "styled-components/macro"
import Layout from "../components/layout"

const AdressBox = styled.address`
  font-style: normal;
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 1.2rem;
  margin-top: 2rem;
  & > * {
    margin-bottom: 0.6rem;
  }
`

const ContactPage = () => (
  <Layout>
    <AdressBox>
      <div>info@nerdbrewing.se</div>
      <div>Nerdbrewing C/O Lilla Ölfabriken</div>
      <div>Norbergsgatan 24</div>
      <div>214 50 Malmö</div>
    </AdressBox>
  </Layout>
)

export default ContactPage
