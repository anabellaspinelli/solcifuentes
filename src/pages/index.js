import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "sol cifuentes"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `sol cifuentes`]}
        />
        <div style={{ height: "630px" }}>

          <img style={{ margin: 0 }} src="./home-image.jpg" alt="Sol Cifuentes in the sun." />
        </div>
        <h2>
          {"Hola a todes "}
          <span role="img" aria-label="wave emoji">👋</span>
        </h2>
        <p>Soy Solsie y este es mi sitio personal.</p>
        <p>En la sección Blog encontrarán mis artículos más recientes.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir al Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
