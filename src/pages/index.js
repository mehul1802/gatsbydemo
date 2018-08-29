import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    {
      data.allFile.edges.map(({node},index) => (
      <div key={index}>{node.relativePath}</div>
    ))}
  </div>
)

export default IndexPage;

export const query = graphql `
 query PagesQuery {
    allFile {
      edges {
        node {
          id
          relativePath
          absolutePath
          birthTime
          extension
        }
      }
    }
  }
`
