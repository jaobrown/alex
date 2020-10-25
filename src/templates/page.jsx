import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@globals'

const PageTemplate = ({ data }) => {
  return (
    <Layout>
      <section className="py-10">
        <h1>{data.title}</h1>
      </section>
      <section className="prose">
        <code>{JSON.stringify(data._rawContent, 0, 2, null)}</code>
      </section>
    </Layout>
  )
}

export default PageTemplate

export const PageQuery = graphql`
  query PageQuery($_id: String!) {
    sanityPage(_id: { eq: $_id }) {
      _rawContent
      title
    }
  }
`
