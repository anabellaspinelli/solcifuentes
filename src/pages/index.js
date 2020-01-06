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

        <img style={{ margin: 0 }} src="./home-image.jpg" alt="Sol Cifuentes in the sun." />
        <h2>
          {"Hola a todes "}
          <span role="img" aria-label="wave emoji">👋</span>
        </h2>
        <p>Me llamo Sol, soy una escritora argentina que vive en Barcelona.</p>
        <p>Redacto artículos para internet por dinero. En esta página, escribo por amor. </p>
        <p>En mi blog vas a encontrar artículos sobre escritura, feminismo, marketing y otros temas que se crucen en mi camino.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Ir al Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
