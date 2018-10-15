import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

class TagRoute extends Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount}  ${
      totalCount === 1 ? 'новость' : 'новости'
    } с  тегом “${tag}”`

    return (
      <div>
        <Header title='Новости' />
        <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: '6rem' }}
              >
                <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
                <PostCard posts={posts} />
                <br />
                <p>
                  <Link to='/tags/'>Показать все теги</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
