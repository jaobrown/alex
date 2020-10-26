import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import { Layout } from '@globals'

// todo: setup environment vars for sanity client
const WorkTemplate = ({ data }) => {
  const page = data.sanityWork
  console.log('WorkTemplate -> page', page)
  return (
    <Layout>
      <div className="container">
        <section className="pt-10">
          <Img fluid={page.featuredImage.asset.fluid} />
          <h1 className="text-2xl font-bold tracking-wider text-gray-700 uppercase">
            {page.title}, <a href={page.companyWebsite}>{page.companyName}</a>
          </h1>
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
      featuredImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      companyWebsite
      companyName
      _rawContent
    }
  }
`
