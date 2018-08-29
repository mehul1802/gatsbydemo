import React from "react";


class Blog extends React.Component {
  render() {
    return(
      <div>
        {this.props.data.allMarkdownRemark.edges.map(({node}) => (
          <div>
            <h1>{node.frontmatter.title}</h1>
            <h1>{node.frontmatter.date}</h1>
            <div>{node.excerpt}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Blog;

export const query = graphql `
  query blogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }

`