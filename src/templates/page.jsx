import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@globals'

const PageTemplate = ({ data, location }) => {
  const currentRoute = location.pathname
  const headerColorMode = currentRoute === '/' ? 'dark' : 'light'

  const content = (data.sanityPage._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c) => {
      let layout = null
      switch (c._type) {
        // case 'bigQuote':
        //   const { Quote } = require('@layouts')
        //   layout = <Quote key={c._key} {...c} />
        //   break
        default:
          const { ComingSoon } = require('@utils/components')
          layout = <ComingSoon key={c._key} {...c} />
          break
      }
      return layout
    })
  return <Layout colorMode={headerColorMode}>{content}</Layout>
}

export default PageTemplate

export const PAGE_QUERY = graphql`
  query PAGE_QUERY($_id: String!) {
    sanityPage(_id: { eq: $_id }) {
      _rawContent(resolveReferences: { maxDepth: 10 })
      title
    }
  }
`
