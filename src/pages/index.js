import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const vendorsQuery = graphql`
  query Vendors {
    allContentfulVendor {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`

const IndexPage = () => {
  const query = useStaticQuery(vendorsQuery);
  const vendors = query.allContentfulVendor.edges.map(edge => edge.node);
  return (
    <Layout>
      <SEO title="Home"/>
      <h1>Headless CMS Comparator</h1>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.slug}>
            <Link to={`/vendors/${vendor.slug}`}>{vendor.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
