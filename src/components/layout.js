import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const isRootOrBlogIndex = location.pathname === rootPath || location.pathname === blogPath

    const header = (
      isRootOrBlogIndex ? <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to='/'
        >
          {title}
        </Link>
      </h1>
        : <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: "var(--textTitle)"
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {`${title} blog`}
          </Link>
        </h3>


    )

    return (
      <Wrapper>
        <SiteContent
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header>{header}</Header>
          <main>{children}</main>
        </SiteContent>
        <Footer>
          <Copyright>© {new Date().getFullYear()}, Sol Cifuentes.</Copyright>
          <GatsbyCredit>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></GatsbyCredit>

        </Footer>
      </Wrapper >
    )
  }
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const SiteContent = styled.div`
  flex: 1;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  font-size: 12px;
`

const Copyright = styled.p`
  margin-bottom: 5px;
`

const GatsbyCredit = styled.p`
  margin-bottom: 0px;
  font-size: 10px;
`

export default Layout
