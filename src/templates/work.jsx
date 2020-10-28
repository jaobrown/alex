import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import { Layout } from '@globals'
import { Link } from '@elements'

const WorkTemplate = ({ data }) => {
  const page = data.sanityWork
  return (
    <Layout>
      <div className="container">
        <section className="pt-10">
          <Img fluid={page.featuredImage.asset.fluid} />
          <h1 className="mt-4 text-xl font-semibold leading-snug tracking-wider uppercase sm:mt-4 md:text-2xl">
            {page.title}
          </h1>
          <Link
            className="mt-1 text-sm font-semibold tracking-wider uppercase"
            to={page.companyWebsite}
          >
            {page.companyName}
          </Link>
        </section>
        <section className="prose">
          <BlockContent
            blocks={page._rawContent}
            dataset={process.env.GATSBY_SANITY_DATASET}
            projectId={process.env.GATSBY_SANITY_PROJECT_ID}
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
