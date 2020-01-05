import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Sol Cifuentes"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `sol cifuentes`]}
        />
        <img style={{ margin: 0 }} src="./solsie.jpg" alt="Gatsby Scene" />
        <h1>
          {"Hola a todes "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Soy Solsie y este es mi sitio personal.</p>
        <p>
          En la sección Blog encontrarán mis artículos más recientes.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir a Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
