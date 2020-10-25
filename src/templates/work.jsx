import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Layout } from '@globals'

// todo: setup environment vars for sanity client
const WorkTemplate = ({ data }) => {
  const page = data.sanityWork
  console.log('WorkTemplate -> page', page)
  return (
    <Layout>
      <div className="container prose">
        <section className="py-10">
          <h1>{page.title}</h1>
          <h2>
            <a href={page.companyWebsite}>{page.companyName}</a>
          </h2>
          <h1>{page.title}</h1>
        </section>
        <section className="prose">
          <BlockContent
            blocks={page._rawContent}
            dataset="production"
            projectId="lvwcfzpn"
          />
        </section>
      </div>
    </Layout>
  )
}

export default WorkTemplate

export const WorkQuery = graphql`
  query WorkQuery($_id: String!) {
    sanityWork(_id: { eq: $_id }) {
      title
      companyWebsite
      companyName
      _rawContent
    }
  }
`
