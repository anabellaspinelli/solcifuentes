import React, { useEffect } from "react"
import { graphql } from "gatsby"

const PortfolioPage = () => {
  useEffect(() => {
    window.location.href = 'https://www.notion.so/solcifuentes/c78d90457c3043b1b2bc09d623266bc1?v=5d842fb10cd54748a1caf6aa98171b70'
  }, [])

  return null
}


export default PortfolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
