/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Page = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  a {
    /* color: inherit; */
    text-decoration: none;
  }

  @media (min-width: 40rem) {
    padding: 0 5rem;
    max-width: 65rem;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Page>
      <Header />
      <main>{children}</main>
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
