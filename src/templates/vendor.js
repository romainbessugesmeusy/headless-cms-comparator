import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img  from "gatsby-image"

export const pageQuery = graphql`
  query VendorPage($slug: String!) {
    contentfulVendor(slug: { eq: $slug }) {
      name
      slug
      logo {
        fluid(maxWidth: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcWebp
            srcSetWebp
        }
      }
    }
  }
`

export default class VendorPage extends React.Component {
  render() {
    const vendor = this.props.data.contentfulVendor
    return (
      <Layout>
        <SEO title={`Headless CMS — ${vendor.name}`} />
        <h1>{vendor.name}</h1>
        <Img fluid={vendor.logo.fluid} />
      </Layout>
    )
  }
}
